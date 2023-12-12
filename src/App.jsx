import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Loading from './Page-Components/Loading'
import './css/App.css'
import Header from './Components/Header'
import Home from './Page-Components/Home'
import getAllArticles from './api';
import AllArticles from './Page-Components/AllArticles';


function App() {
  const [articles, setArticles] = useState([])
  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
     getAllArticles()
     .then((articles) => {setArticles(articles)})
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
        </Routes>
      </>
    )
    }
};

export default App
