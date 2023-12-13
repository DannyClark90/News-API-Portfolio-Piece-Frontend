import axios from "axios";

const fetchApiData = axios.create({
    baseURL: 'https://news-api-portfolio-piece.onrender.com/api',
    headers: {
        'Accept': 'application/json'
    }
  });

  export default fetchApiData