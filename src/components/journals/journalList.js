import React from "react"
import JournalCard from "./journalCard"

const JournalList = ({journals}) => {

  return (
    <div>
      <h2 className="sr-only">Recent Journals</h2>
      <div className="row book-card-list journals">
        {
          journals.map(({node}) => {
            if (Array(1,2).includes(node.frontmatter.orderOnPage)) {
              return (
                <JournalCard key={node.id} cover={node.fields.cover} journal={node.frontmatter} />
              )
            } else {
              return null
            }
          })
        }
      </div>
    </div>
  )
}

export default JournalList
