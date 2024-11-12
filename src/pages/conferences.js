import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ConferenceList from "../components/conferences/conferenceList"

const Conferences = ({data}) => {
  const conferences = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Conferences" />
      <div className="container page-container">
      <h1>Conferences and Events</h1>
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <ConferenceList conferences={conferences} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "conference" } }
    },
    sort: {
      fields: frontmatter___date,
      order: ASC
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

export default Conferences
