import React from "react"
// import Img from "gatsby-image"

const JournalCard = ({ cover, journal }) => {
  const { title, readLink, description, orderOnPage } = journal

  return (
    <article className="card journal-card">
      {cover && (
        <div className="journal-card-image">
          <img src={cover} alt={`Cover of ${title}`} className="card-img-top" />
        </div>
      )}

      <div className="card-body">
        <h3 id={`journal${orderOnPage}`} className="card-title">
          {title}
        </h3>

        {description && <p className="card-text">{description}</p>}

        {readLink && (
          <a
            className="card-link btn btn-secondary"
            aria-describedby={`journal${orderOnPage}`}
            href={readLink}
          >
            Read free online
          </a>
        )}
      </div>
    </article>
  )
}

export default JournalCard
