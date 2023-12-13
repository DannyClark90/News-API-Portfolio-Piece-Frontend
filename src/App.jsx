import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Loading from './Page-Components/Loading'
import './css/App.css'
import Header from './Components/Header'
import Home from './Page-Components/Home'
import fetchApiData from './api';
import AllArticles from './Page-Components/AllArticles';
import Article from './Page-Components/Article'


function App() {
  const [articles, setArticles] = useState([])
  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
     fetchApiData.get('/articles')
     .then((articles) => {setArticles(articles.data.articles)})
     setIsLoading(false)
  }, []);

    if(isLoading){
      return <Loading/>
    }
    else{
    return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home articles={articles}/>}/>
          <Route path="/all-articles" element={<AllArticles articles={articles}/>}/>
          <Route path={`/all-articles/:article_id`} element={<Article/>}/>
        </Routes>
      </>
    )
    }
};

export default App
