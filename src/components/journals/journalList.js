import React from "react"
import JournalCard from "./journalCard"

const JournalList = ({ journals }) => {
  const featuredJournals = journals.slice(0, 3)

  return (
    <div>
      <h2 className="mt-0">Our Journals</h2>

      <div className="journal-card-list">
        {featuredJournals.map(({ node }) => (
          <div className="journal-card-container" key={node.id}>
            <JournalCard
              cover={node.fields.cover}
              journal={node.frontmatter}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default JournalList
