import React from "react"
import {Link} from "gatsby"

const NewsCard = ({singleNews, cardStyle}) => {
  const {title, summary, date} = singleNews.frontmatter
  const slug = singleNews.fields.slug
  

  return (
    <div className="blog-card-container">
      <Link to={slug}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{summary}</p>
                <p className="published"><small className="text-muted">Published {date}</small></p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NewsCard
