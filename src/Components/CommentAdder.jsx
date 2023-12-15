import { useState } from "react";
import '../css/CommentAdder.css'

const CommentAdder = () => {
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <form id="commentAdder">
                <label htmlFor="newComment" className="text-black font-bold py-3">Post a comment</label>

                <textarea
                placeholder="Comment.."
                id="newComment"
                multiline='true'
                value={newComment}
                onChange={() => {setNewComment(e.target.value)}}
                >
                </textarea>
                
                <button type="button" className="px-6 py-3.5 my-3 w-24 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">Post</button>
            </form>
        </>
    )
};

export default CommentAdder;