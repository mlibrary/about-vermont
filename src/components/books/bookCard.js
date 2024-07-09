import React from "react"
// import Img from "gatsby-image"

const Book = ({cover, book}) => {
  const {
    title,
    author,
    readLink,
    buyLink,
    description,
  } = book

  return (
    <div className="card mb-3 book-card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={cover} alt={`cover of ${title}`} className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle text-muted h6">{author}</p>
            <p className="card-text">{description}</p>
            <a className="card-link btn btn-secondary btn-lg" role="button" href={readLink}>Read free online</a>
            <a className="card-link btn btn-outline-primary btn-lg" role="button" href={buyLink}>Buy</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Book
