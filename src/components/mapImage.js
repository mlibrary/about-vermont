import React from "react"

const MapImage = ({mapImage}) => {
  return (
    <div className="readership-map">
      <h2>{mapImage.heading}</h2>
      <p>{mapImage.description}</p>
      <div className="readership-map-embed">
        <iframe title="Amherst College Press Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.view=202426456"></iframe>
      </div>
    </div>
  )
}


export default MapImage
