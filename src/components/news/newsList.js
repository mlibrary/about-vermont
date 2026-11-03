import React from "react"
import NewsCard from "./newsCard"

const NewsList = ({news, headingLevel}) => {
  return (
    <section className="blog-card-list">
      {news.map(({node}) => (
        <NewsCard key={node.id} singleNews={node} headingLevel={headingLevel} />
      ))}
    </section>
  )
}

export default NewsList
