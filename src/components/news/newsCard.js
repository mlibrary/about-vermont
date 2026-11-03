import React from "react"
import {Link} from "gatsby"

const NewsCard = ({singleNews, headingLevel = 3}) => {
  const {title, summary, date} = singleNews.frontmatter
  const slug = singleNews.fields.slug
  const Heading = `h${headingLevel}`

  return (
    <div className="blog-card-container">
      <article className="card mb-3">
        <header className="card-header">
          <Heading className="card-title"><Link to={slug}>{title}</Link></Heading>
        </header>
        <div className="card-body">
          <p className="card-text">{summary}</p>
          <p className="published"><small className="text-muted">Published {date}</small></p>
        </div>
      </article>
    </div>
  )
}

export default NewsCard
