import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import BookList from "../components/books/bookList"
import JournalList from "../components/journals/journalList"
import Tagline from "../components/tagline"
import Fundraiser from "../components/fundraiser"
import BlogList from "../components/blog/blogList"
import ConferenceList from "../components/conferences/conferenceList"
import MapImage from "../components/mapImage"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
      }
      newsletterSection {
        heading
        description
        url
        buttonLabel
      }
      fundraiserSection {
        heading
        description
        url
        buttonLabel
      }
      mapSection {
        heading
        description
      }      
    }
  }
  books: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "book" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title
          author
          description
          readLink
          buyLink
          orderOnPage
        }
      }
    }
  }
  journals: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "journal" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title
          author
          description
          readLink
          buyLink
          orderOnPage
        }
      }
    }
  }
  blog: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "blog" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    },
    limit: 3
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
  conferences: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "conference" } }
    },
    sort: {
      fields: frontmatter___date,
      order: ASC
    },
    limit: 6
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

const IndexPage = ({data}) => {
  const tagline = data.home.frontmatter.taglineSection
  const fundraiser = data.home.frontmatter.fundraiserSection
  const map = data.home.frontmatter.mapSection
  const books = data.books.edges
  const journals = data.journals.edges
  const blog = data.blog.edges
  const conferences = data.conferences.edges

  return (
    <Layout>
      <SEO title="Home" />
      <section className="books-container container">
          <BookList books={books} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="https://fulcrum.org/vermont">Browse all our books</a>
              </p>
            </div>
          </div>
        </section>
        <section className="books-container container">
          <JournalList journals={journals} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="https://fulcrum.org/amherst">Browse our journals</a>
              </p>
            </div>
          </div>
        </section>
        <section className="tagline-container">
          <div className="container">
            <div className="row">
              <div className="tagline col-md-8 offset-md-2">                
                <Tagline text={tagline.text} />
              </div>
              <div className="cta-tagline col-md-2">
                <a className="btn btn-lg btn-primary text-dark" href={tagline.buttonUrl}>{tagline.buttonLabel}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="author-library-container">
          <div className="container">
            <div className="row">
              <div className="author-container col-sm">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <p>Interested in publishing your next book with us?</p>
                    </div>
                    <div className="col-md-6">
                      <a className="btn btn-secondary" href="/authors">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="newsletter-container col-sm">                  
              </div>
              <div className="library-container col-sm">
                   <Fundraiser fundraiser={fundraiser} />
              </div>
            </div>
          </div>
        </section>        
        <section className="news-events-container container">
          <div className="row justify-content-around">
            <div className="news-container col-lg-5">
              <BlogList blog={blog} />
              <div className="row mt-4">
                <div className="col-md-12">
                  <p className="text-right">
                    <Link to="/blog">Display all posts</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="events-container col-lg-5">
              <ConferenceList conferences={conferences} />
              <div className="row mt-4">
                <div className="col-md-12">
                  <p className="text-right">
                    <Link to="/conferences">Display all conferences</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage
