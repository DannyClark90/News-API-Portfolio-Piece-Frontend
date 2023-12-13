import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Style.css";
import "../css/Article.css";
import Loading from "./Loading";
import fetchApiData from "../api";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    fetchApiData.get(`/articles/${article_id}`).then(({data}) => {
      setArticle(data.article);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
    <>
      <main className="page-container">  
        <article className="singleArticle">
          <h2 className="text-black font-bold text-xl my-3">{article.title}</h2>
          <img id='singleArticleImg' src={article.article_img_url} alt="" />
          <section id="articleInfo">
            <p className='text-black font-bold'>Topic: <span className='text-black font-medium'>{article.topic}</span></p>
            <p className='text-black font-bold '>Author: <span className='text-black font-medium'>{article.author}</span></p>
            <p className='text-black font-bold'>Posted: <span className='text-black font-medium'>{article.created_at}</span></p>
            <p className="text-black my-3">{article.body}</p>
          </section>
          <button>
            <img src="src/assets/Like.png" alt="Thumbs Up; like Button" className='h-11'/>
            <p className='text-black font-bold'>Likes:{article.votes}</p>
          </button>
          <Link to={`/all-articles`}>
              <button type="button" className="px-6 py-3.5 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">Back To Articles</button>
          </Link> 
        </article>
      </main>
    </>
    )
  }
};

export default Article;
