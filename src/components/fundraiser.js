import React from "react"

const Fundraiser = ({fundraiser}) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2 className="sr-only">{fundraiser.heading}</h2>
        <p>{fundraiser.description}</p>
      </div>
    <div className="col-md-6">
      <a className="btn btn-secondary" href={fundraiser.url}>{fundraiser.buttonLabel}</a>
    </div> 
  </div>
  )
}

export default Fundraiser
