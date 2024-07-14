import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import {graphql} from "gatsby"

const News = ({data}) => {
  const { html } = data.markdownRemark
  const { title, summary, date } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <div className="container page-container news-item">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <h1 className="mb-3">{title}</h1>
            <div className="summary">
              <time className="mt-4">{date}</time>
              <p className="lead">{summary}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center main">
          <div className="col-md-8">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      summary
      date(formatString: "MMMM Do, YYYY")
    }
  }
}
`

export default News
