import '../css/ArticleCard.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import dayjs from 'dayjs';
import Loading from '../Page-Components/Loading';

const ArticleCard = ({article}) => {
    const datePosted = dayjs(article.created_at).format('DD/MM/YYYY')

    if(!Object.keys(article).length){
        return <Loading/>
    }
    else {
        return(
            <>
    <section id="article-card">
        <h2 className='font-bold text-lg text-black my-3'>{article.title}</h2>
        <img id='articleCardImg' src={article.article_img_url} alt="" />
            <div id='articleCardInfo'>
                <section>
                    <p className='text-black font-bold'>Topic: <span className='text-black font-medium'>{article.topic}</span></p>

                    <p className='text-black font-bold px-2'>Author: <span className='text-black font-medium'>{article.author}</span></p>

                    <p className='text-black font-bold'>Posted: <span className='text-black font-medium'>{datePosted}</span></p>
                </section>
        </div>
        <div id='articleCardButtonContainer'>
        <Link to={`/all-articles/${article.article_id}`}>
                <button type="button" className="px-6 py-3.5 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">View Article</button>
        </Link>    
                <button>
                <img src="src/assets/Like.png" alt="Thumbs Up; like Button" className='h-11'/>
                </button>
                <p className='text-black font-bold'>{article.votes} Likes</p>
        </div>
        </section>
        </>
        )
    }    
};

export default ArticleCard;