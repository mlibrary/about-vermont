import React from "react"
import BookCard from "./bookCard"

const BookList = ({books}) => {

  return (
    <div>
      <h2 className="sr-only">Recent Books</h2>
      <div className="row book-card-list">
        {
          books.map(({node}) => {
            if (Array(1,2).includes(node.frontmatter.orderOnPage)) {
              return (
                <BookCard key={node.id} cover={node.fields.cover} book={node.frontmatter} />
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

export default BookList
