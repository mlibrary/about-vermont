import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import BookList from "../components/books/bookList"
import JournalList from "../components/journals/journalList"
import Tagline from "../components/tagline"
import CallToAction from "../components/callToAction"
import NewsList from "../components/news/newsList"
import ConferenceList from "../components/conferences/conferenceList"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
        buttonLabel
        buttonUrl
      }
      firstCallToActionSection {
        description
        buttonUrl
        buttonLabel
      }
      secondCallToActionSection {
        description
        buttonUrl
        buttonLabel
      }
      thirdCallToActionSection {
        description
        buttonUrl
        buttonLabel
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
          orderOnPage
        }
      }
    }
  }
  news: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "news" } }
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
  const firstCallToAction = data.home.frontmatter.firstCallToActionSection
  const secondCallToAction = data.home.frontmatter.secondCallToActionSection
  const thirdCallToAction = data.home.frontmatter.thirdCallToActionSection
  const books = data.books.edges
  const journals = data.journals.edges
  const news = data.news.edges
  const conferences = data.conferences.edges

  return (
    <Layout>
      <SEO title="Home" />
      <section className="top-tagline">
        <div className="container d-flex">
          <div className="col-md-12 d-flex justify-content-center">
            <span className="">Free for readers. Free for authors. Free for collaborators.</span>
          </div>
        </div>
      </section>
      <section className="books-container container">
          <BookList books={books} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="https://fulcrum.org/vermont">Browse our books</a>
              </p>
            </div>
          </div>
        </section>
        <section className="books-container container">
          <JournalList journals={journals} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="https://jeed.pubpub.org/">Browse our journals</a>
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
                <a className="btn btn-lg btn-primary" href={tagline.buttonUrl}>{tagline.buttonLabel}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-container">
          <div className="container">
            <div className="row">
              <div className="cta-1-container col-sm">
                <CallToAction callToAction={firstCallToAction} />
              </div>
              <div className="cta-2-container col-sm">
                <CallToAction callToAction={secondCallToAction} />
              </div>
              <div className="cta-3-container col-sm">
                <CallToAction callToAction={thirdCallToAction} />
              </div>
            </div>
          </div>
        </section>        
        <section className="news-events-container container">
          <div className="row justify-content-around">
            <div className="news-container col-lg-5">
              <NewsList news={news} />
              <div className="row mt-4">
                <div className="col-md-12">
                  <p className="text-right">
                    <Link to="/news">Display all posts</Link>
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
