import ArticleCard from "../Components/Article-card"
import '../css/Style.css'

const AllArticles = ({articles}) => {
    return (
        <>
        <h1 className="text-black font-bold text-4xl my-0 my-3">All Articles</h1>
        <main className="page-container">
            <ul>
            {articles.map((article) => { return (
              <li key={article.article_id}><ArticleCard article={article}/></li>)})
            }
          </ul>
        </main>
        </>
    )
};

export default AllArticles;