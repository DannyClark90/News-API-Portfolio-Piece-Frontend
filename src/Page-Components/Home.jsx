import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Style.css'
import Loading from './Loading'
import ArticleCard from '../Components/Article-card';
import getAllArticles from '../api';

const Home = ({articles}) => {
    
        return(
            <>
            <div className='page-container'>
                <Link to='/all-articles'>
                    <button type="button" className="px-6 py-3.5 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">View All Articles</button>
                </Link>
            </div>
            </>
        )
};

export default Home