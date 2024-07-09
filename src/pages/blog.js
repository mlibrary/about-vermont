import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Title from "../components/title"
import BlogList from "../components/blog/blogList"

const Blog = ({data}) => {
  const heading = data.heading
  const blog = data.blogs.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container page-container">
        <div className="row text-right">
          <div className="col-md-12">
            <p className="social scala-sans">Connect with us  <a href="https://www.instagram.com/amherstcollegepress/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" classname="social-link fb" aria-hidden="false"><title>Follow us on Instagram</title><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
              <a href="https://www.twitter.com/AmCollPress"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link tw" aria-hidden="false"><title>Follow us on Twitter</title><path d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z"></path></svg></a>
              <a href="https://www.youtube.com/channel/UCvGjw8D-MFynNzHPT05zUYQ"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link yt" aria-hidden="true"><title>YouTube</title><path d="M20,20.15a2.09,2.09,0,0,1-1.79,1.62A55.6,55.6,0,0,1,12,22a55.6,55.6,0,0,1-6.19-.23A2.08,2.08,0,0,1,4,20.15a17.64,17.64,0,0,1-.29-3.91h0A18.21,18.21,0,0,1,4,12.33a2.11,2.11,0,0,1,1.8-1.62A55.33,55.33,0,0,1,12,10.48a55.6,55.6,0,0,1,6.19.23A2.09,2.09,0,0,1,20,12.33a17.59,17.59,0,0,1,.29,3.91A18.26,18.26,0,0,1,20,20.15ZM8.45,13.46V12.41H5v1.05H6.14v6.35H7.26V13.46ZM10.27,2,8.92,6.45v3H7.8v-3a17.15,17.15,0,0,0-.68-2.36C6.88,3.4,6.63,2.69,6.4,2H7.58l.79,2.94L9.13,2Zm1.19,17.81V14.3h-1v4.22c-.22.31-.43.47-.64.47s-.21-.08-.23-.24a2.77,2.77,0,0,1,0-.39V14.3h-1v4.36a2.63,2.63,0,0,0,.09.82.59.59,0,0,0,.64.41,1.6,1.6,0,0,0,1.14-.68v.6Zm1.8-12.14A2.24,2.24,0,0,1,13,9a1.38,1.38,0,0,1-1.18.57A1.38,1.38,0,0,1,10.59,9a2.26,2.26,0,0,1-.31-1.32V5.72a2.18,2.18,0,0,1,.31-1.31,1.38,1.38,0,0,1,1.18-.57A1.38,1.38,0,0,1,13,4.41a2.18,2.18,0,0,1,.31,1.31Zm-1-2.15c0-.52-.15-.77-.48-.77s-.48.25-.48.77V7.86c0,.51.15.78.48.78s.48-.27.48-.78Zm3,10.44a3.72,3.72,0,0,0-.1-1.1.78.78,0,0,0-.79-.63,1.35,1.35,0,0,0-1,.6V12.41h-1v7.4h1v-.53a1.37,1.37,0,0,0,1,.61.78.78,0,0,0,.79-.61,4,4,0,0,0,.1-1.12Zm-1,2.28c0,.5-.15.75-.44.75a.71.71,0,0,1-.5-.25V15.38a.69.69,0,0,1,.5-.24c.29,0,.44.25.44.74ZM17,9.48H16V8.86a1.61,1.61,0,0,1-1.15.7.63.63,0,0,1-.65-.42,2.62,2.62,0,0,1-.09-.83V3.91h1V8a3,3,0,0,0,0,.4c0,.15.1.24.24.24s.41-.16.63-.48V3.91h1Zm2,8.42H18a5,5,0,0,1,0,.68.43.43,0,0,1-.44.41c-.35,0-.52-.26-.52-.77v-1h2V16.1a2.23,2.23,0,0,0-.3-1.3,1.53,1.53,0,0,0-2.38,0A2.15,2.15,0,0,0,16,16.1V18a2.11,2.11,0,0,0,.32,1.29,1.42,1.42,0,0,0,1.21.57,1.37,1.37,0,0,0,1.2-.59,1.21,1.21,0,0,0,.24-.6,4.94,4.94,0,0,0,0-.65Zm-1-1.49H17V15.9c0-.51.17-.76.51-.76s.5.25.5.76Z"></path></svg></a>
              <a href="https://visitor.r20.constantcontact.com/manage/optin?v=0013DrR6g8m_-n07OrbI1eZRz5CjLmfcdeXQPZX4RlDGW9zhWbxaf90uX_8hMD9IXD2pSe5XnutydjyXery33ZRgKEOSwQbT9bWpgP0TFN-LGE%3D"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="social-link email" aria-hidden="false"><title>Sign-up for Emails</title><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg></a>
            </p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <Title title={heading.frontmatter.title} />
            <div dangerouslySetInnerHTML={{ __html: heading.html }} />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <BlogList blog={blog} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  heading: markdownRemark (frontmatter: {templateKey: { eq: "blog-page" }}) {
    html
    frontmatter{
      title
    }
  },
  blogs: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "blog" } }
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

export default Blog
