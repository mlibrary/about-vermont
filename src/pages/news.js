import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import NewsList from "../components/news/newsList"

const News = ({data}) => {
  const news = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="News" />
      <div className="container page-container pt-5 news-page">
      <h1 className="text-center section-heading">Latest News</h1>
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <NewsList news={news} headingLevel={2} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
 allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "news" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    }
  ) {
    edges {
      node {
        id
        fields{
          slug
        }
        html
        frontmatter {
          title
          summary
          date(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
}
`

export default News
