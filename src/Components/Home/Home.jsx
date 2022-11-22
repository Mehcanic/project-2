import React from 'react'
import Likes from '../Likes/Likes'
import './Homes.css'

const Home = () => {

  const [carNews, setCarNews] = React.useState(null)

  const getCarNewsData = async () => {
    const response = await fetch("https://inshorts.deta.dev/news?category=automobile")
    const data = await response.json()
    setCarNews(data)
  }

  React.useEffect(() => {
    getCarNewsData()
  }, [])

  const getCarNews = () => {
    return carNews.data.map((news) => {
      return (
        <div className="home-container">
          <div className='article-container'>
            <div className='news-container'>
              <div className='news-logo'>
                <img src={news.imageUrl} width="100"/>
                <Likes className="likes" />
              </div>
              <div className='news-content'>
                <h2>{news.title}</h2>
                <p>{news.content}</p>
                <p>Author: {news.author}</p>
                <p>Published at: {news.publishedAt}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  if (!carNews) {
    return <h1>Loading news...</h1>
  }

  return (
    <>
        <h1>News</h1>
        <div className="automobile-container">{getCarNews()}</div>
    </>
  )
}

export default Home