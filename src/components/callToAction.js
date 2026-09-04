import React from "react"
import { Link } from "gatsby"

const CallToAction = ({ callToAction }) => {
  const { buttonLabel, buttonUrl, description } = callToAction

  return (
    <div className="call-to-action">
      <p className="call-to-action-description">{description}</p>

      {buttonUrl?.startsWith("/") ? (
        <Link className="btn btn-secondary" to={buttonUrl}>
          {buttonLabel}
        </Link>
      ) : (
        <a className="btn btn-secondary" href={buttonUrl}>
          {buttonLabel}
        </a>
      )}
    </div>
  )
}

export default CallToAction