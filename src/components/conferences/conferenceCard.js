import React from "react"
import {Link} from "gatsby"

const ConferenceCard = ({conference, cardStyle}) => {
  const {title, summary} = conference.frontmatter
  const slug = conference.fields.slug

  return (
        <li className="media my-4 event-card-container">
          <Link to={slug}>
          <div className="media-body">
            <h3 className="mt-0 mb-1">{title}</h3>
            <p>{summary}</p>
          </div>
          </Link>
        </li>
  )
}

export default ConferenceCard
