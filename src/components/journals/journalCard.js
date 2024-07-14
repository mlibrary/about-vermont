import React from "react"
// import Img from "gatsby-image"

const Journal = ({cover, journal}) => {
  const {
    title,
    author,
    readLink,    
    description,
  } = journal

  return (
    <div className="card mb-3 book-card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={cover} alt={`cover of ${title}`} className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>            
            <p className="card-text">{description}</p>
            <a className="card-link btn btn-secondary btn-lg" role="button" href={readLink}>Read free online</a>            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Journal
