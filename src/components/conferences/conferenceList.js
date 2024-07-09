import React from "react"
import ConferenceCard from "./conferenceCard"

const ConferenceList = ({conferences, cardStyle}) => {
  return (
    <section className="event-card-list">
      <h1>Conferences</h1>
      <p className="scala-sans">Amherst College Press representatives will be attending the following conferences. <a href="mailto:acpress@amherst.edu">Email us</a> if you'd like to meet up.</p>
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
