const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query. ${results.errors}`)
    return
  }

  // Filter out books, we don't make pages for those
  // Also the home-page, or index.js. It just has pieces of content,
  // not a generated page.
  // FULCRUMOPS-290 also community is different, not a generated "page" but more like index.js 
  // mostly just because of historical reasons
  pages = results.data.allMarkdownRemark.edges.filter(edge => {
    if (edge.node.frontmatter.templateKey === "book" ||
        edge.node.frontmatter.templateKey === "journal" ||
        edge.node.frontmatter.templateKey === "home-page" ||
        edge.node.frontmatter.templateKey === "blog-page") {
      return false
    } else {
      return edge
    }
  })

  pages.forEach(edge => {
    const pathName = edge.node.frontmatter.path || edge.node.fields.slug;
    const component = path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`);
    const id = edge.node.id
    createPage({
      path: pathName,
      component,
      context: {
        id: id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // HELIO-3193: normalize frontmatter cover paths to /assets/...
    if (node.frontmatter.cover) {
      createNodeField({
        node,
        name: `cover`,
        value: node.frontmatter.cover.replace(/^.*assets/, "/assets"),
      })
    }

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Replaces gatsby-remark-relative-images:
// resolve frontmatter.cover to the matching File node so childImageSharp works.
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes([
    schema.buildObjectType({
      name: `MarkdownRemarkFrontmatterSlideshowSectionSlides`,
      fields: {
        bodyHtml: {
          type: `String`,
          resolve: async (source, args, context, info) => {
            if (!source.body) return null
            const transformer = require("gatsby-transformer-remark")
            // Simplest reliable path: render with a standalone markdown parser
            const { remark } = await import("remark")
            const remarkHtml = (await import("remark-html")).default
            const file = await remark().use(remarkHtml).process(source.body)
            return String(file)
          },
        },
      },
      extensions: { infer: true },
    }),
    schema.buildObjectType({
      name: `MarkdownRemarkFrontmatter`,
      fields: {
        cover: {
          type: `File`,
          resolve: (source, args, context) => {
            if (!source.cover) return null

            // Strip everything up to and including "assets" and match on
            // the remaining relative path.
            const relative = source.cover.replace(/^.*assets\//, "")

            return context.nodeModel
              .getAllNodes({ type: `File` })
              .find(
                file =>
                  file.relativePath === relative ||
                  file.relativePath.endsWith(`/${relative}`) ||
                  file.base === path.basename(relative)
              )
          },
        },
      },
      interfaces: [`Node`],
      extensions: { infer: true },
    }),
  ])
}
