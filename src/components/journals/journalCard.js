import React from "react"
// import Img from "gatsby-image"

const Journal = ({cover, journal}) => {
  const {
    title,
    author,
    readLink,    
    description,
    orderOnPage
  } = journal

  return (
    <div className="card mb-3 book-card journal">
      <div className="row">
        <div className="col-md-4">
          <img src={cover} alt={`cover of ${title}`} className="card-img m-3" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 id={`journal${orderOnPage}`} className="card-title">{title}</h3>            
            <p className="card-text">{description}</p>
            <a className="card-link btn btn-secondary btn-lg" aria-describedby={`journal${orderOnPage}`} href={readLink}>Read free online</a>            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Journal
