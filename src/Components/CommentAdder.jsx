import { useState, useContext} from "react";
import '../css/CommentAdder.css'
import fetchApiData from "../api";
import { UserContext } from "./UserContext";

const CommentAdder = ({articleId, setComments}) => {
    const { signedInUser } = useContext(UserContext)
    const [newComment, setNewComment] = useState("")

    const user = `${signedInUser}`

    const handleCommentSubmit = (event) => {
        event.preventDefault()
        fetchApiData.post(`articles/${articleId}/comments`, {author:user, body:newComment}, )  
        .then((newApiComment) => {
            setNewComment("")
            const postedComment = newApiComment.data.postedComment;
            setComments((currentComments) => {return [postedComment, ...currentComments]})
        })    
        .catch((err) => {
            console.log(err);
        })
    };

    return (
        <>
            <form id="commentAdder" onSubmit={handleCommentSubmit}>
                <label htmlFor="newComment" className="text-black font-bold py-3">Post a comment</label>

                <textarea
                className="text-black"
                placeholder="Comment.."
                id="newComment"
                multiline='true'
                value={newComment}
                onChange={(event) => {setNewComment(event.target.value)}}
                >
                </textarea>
                
                <button type="submit" className="px-6 py-3.5 my-3 w-24 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">Post</button>
            </form>
        </>
    )
};

export default CommentAdder;