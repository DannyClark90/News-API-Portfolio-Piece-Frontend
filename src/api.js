import axios from "axios";

const getAllArticles = () => {
    return axios.get("https://news-api-portfolio-piece.onrender.com/api/articles")
    .then((articles) => {return articles.data.articles})
};

export default getAllArticles