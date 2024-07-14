import React from "react"
import NewsCard from "./newsCard"

const NewsList = ({news, cardStyle}) => {
  return (
    <section className="blog-card-list">
    {
      news.map(({node}) => {
        return <NewsCard key={node.id} singleNews={node} cardStyle={cardStyle}/>
      })
    }
    </section>
  )
}

export default NewsList
