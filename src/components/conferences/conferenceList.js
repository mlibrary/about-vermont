import React from "react"
import ConferenceCard from "./conferenceCard"

const ConferenceList = ({conferences, cardStyle}) => {
  return (
    <section className="event-card-list">      
      <p className="scala-sans">Look for UVM Press representatives at these upcoming events:</p>
      <ul className="list-unstyled">
      {
        conferences.map(({node}) => {
          return <ConferenceCard key={node.id} conference={node} cardStyle={cardStyle} />
        })
      }
      </ul>
    </section>
  )
}

export default ConferenceList
