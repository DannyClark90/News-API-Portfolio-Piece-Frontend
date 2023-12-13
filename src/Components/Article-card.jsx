import '../css/ArticleCard.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ArticleCard = ({article}) => {

    return(
    <>
    <section id="article-card">
        <h2 className='font-bold text-lg text-black my-3'>{article.title}</h2>
        <img id='articleCardImg' src={article.article_img_url} alt="" />
            <div id='articleCardInfo'>
                <section>
                    <p className='text-black font-bold'>Topic: <span className='text-black font-medium'>{article.topic}</span></p>

                    <p className='text-black font-bold px-2'>Author: <span className='text-black font-medium'>{article.author}</span></p>

                    <p className='text-black font-bold px-2'>Posted: <span className='text-black font-medium'>{article.created_at}</span></p>
                </section>
        </div>
        <div id='articleCardButtonContainer'>
        <Link to={`/all-articles/${article.article_id}`}>
                <button type="button" className="px-6 py-3.5 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">View Article</button>
        </Link>    
                <button>
                <img src="src/assets/Like.png" alt="Thumbs Up; like Button" className='h-11'/>
                <p className='text-black font-bold'>Likes:{article.votes}</p>
                </button>
        </div>
    </section>
    </>
    )

    
};

export default ArticleCard;