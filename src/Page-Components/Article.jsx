import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Style.css";
import "../css/Article.css";
import Loading from "./Loading";
import fetchApiData from "../api";
import CommentCard from "../Components/CommentCard";
import Image from '../assets/Like.png'

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([])

  useEffect(() => {
      fetchApiData.get(`/articles/${article_id}/comments`)
      .then((comments) => {setComments(comments.data.article_comments)})
      setIsLoading(false)
  }, []);

  useEffect(() => {
    fetchApiData.get(`/articles/${article_id}`).then(({data}) => {
      setArticle(data.article);
    });
    setIsLoading(false);
  }, []);

  const datePosted = dayjs(article.created_at).format('DD/MM/YYYY')

  const areThereComments = () => {
      {if(!Object.keys(comments).length){
        return (
          <div className="articleInfo text-black font-bold"><p>No Comments...</p></div>
        )
      }
      else{
        return (
          <ul>
          {comments.map((comment) => {return (
            <li key={comment.comment_id}><CommentCard comment={comment}/></li>)})
          }
          </ul>
        )
      }
    }
  }

  if (isLoading) {
    return <Loading/>;
  } else {
    return (
    <>
      <main className="page-container">  
        <article className="singleArticle">
          <h2 className="text-black font-bold text-xl my-3">{article.title}</h2>
          <img id='singleArticleImg' className='object-scale-down rounded-xl' src={article.article_img_url} alt="" />
          
          <section className="articleInfo">
            <p className='text-black font-bold'>Topic: <span className='text-black font-medium'>{article.topic}</span></p>
            <p className='text-black font-bold '>Author: <span className='text-black font-medium'>{article.author}</span></p>
            <p className='text-black font-bold'>Posted: <span className='text-black font-medium'>{datePosted}</span></p>
            <p className="text-black my-3">{article.body}</p>
          </section>

          <Link to={`/all-articles`}>
              <button type="button" className="px-6 py-3.5 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">Back To Articles</button>
          </Link> 

          <div id="commentCardContainer">
            <h3 className="text-black font-bold text-lg py-3">Comments</h3>
          {areThereComments()}
          </div>
          
          <button>
            <img src={Image} alt="Thumbs Up; like Button" className='h-11'/>
          </button>
          <p className='text-black font-bold'>{article.votes} Article Likes</p>
        </article>
      </main>
    </>
    )
  }
};

export default Article;
