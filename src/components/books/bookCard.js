import React from "react"
// import Img from "gatsby-image"

const Book = ({cover, book}) => {
  const {
    title,
    author,
    readLink,
    description,
    orderOnPage
  } = book

  return (

    <article className="card book-card">
      {cover && (
        <div className="book-card-image">
          <img src={cover} alt={`Cover of ${title}`} className="card-img-top" />
        </div>
      )}

      <div className="card-body">
        <h3 id={`book${orderOnPage}`} className="card-title">
          {title}
        </h3>

        {author && <p className="card-subtitle text-muted h6">{author}</p>}

        {description && <p className="card-text">{description}</p>}

        {readLink && (
          <a
            className="card-link btn btn-secondary"
            aria-describedby={`book${orderOnPage}`}
            href={readLink}
          >
            Read free online
          </a>
        )}
      </div>
    </article>

  )
}

export default Book
