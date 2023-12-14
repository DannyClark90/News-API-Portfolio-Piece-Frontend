import fetchApiData from "../api";

const handleUpVoteClick = (articleId) => {  
    return fetchApiData.patch(`/articles/${articleId}`, {inc_votes:1})}

  const handleDownVoteClick = (articleId) => { 
    return fetchApiData.patch(`/articles/${articleId}`, {inc_votes:-1})}

export {handleUpVoteClick, handleDownVoteClick}