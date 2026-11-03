import React, { useId } from "react"
import { Link } from "gatsby"

const CallToAction = ({ callToAction }) => {
  const { buttonLabel, buttonUrl, description } = callToAction
  const descriptionId = useId()
  const linkProps = { className: "btn btn-secondary", "aria-describedby": descriptionId }

  return (
    <div className="call-to-action">
      <p id={descriptionId} className="call-to-action-description">{description}</p>
      {buttonUrl?.startsWith("/") ? (
        <Link {...linkProps} to={buttonUrl}>{buttonLabel}</Link>
      ) : (
        <a {...linkProps} href={buttonUrl}>{buttonLabel}</a>
      )}
    </div>
  )
}

export default CallToAction