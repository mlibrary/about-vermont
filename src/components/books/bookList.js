import React from "react"
import BookCard from "./bookCard"

const BookList = ({books}) => {
  const featuredBooks = books.slice(0, 3)

  return (
    <div>
      <h2 className="text-center section-heading">Recent Books</h2>
      
      <div className="book-card-list">
        {featuredBooks.map(({node}) => (
          <div className="book-card-container" key={node.id}>
            <BookCard
              cover={node.fields.cover}
              book={node.frontmatter}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList
