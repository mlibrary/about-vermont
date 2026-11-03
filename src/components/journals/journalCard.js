import React from "react"

const JournalCard = ({ cover, journal }) => {
  const { title, description, readLink } = journal

  return (
    <article className="card journal-card">
      {cover && (
        <div className="journal-card-image">
          <img src={cover} alt={`Cover of ${title}`} className="card-img-top" />
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-text">{description}</p>}
        {readLink && (
          <a className="btn btn-primary mt-auto" href={readLink}>
            Read free online
            <span className="sr-only">: {title}</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default JournalCard
