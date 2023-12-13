import '../css/CommentCard.css'
import dayjs from "dayjs";
import Loading from '../Page-Components/Loading';

const CommentCard = ({comment}) => {
    const datePosted = dayjs(comment.created_at).format('DD/MM/YYYY')
    if(!Object.keys(comment).length){
        return <Loading/>
    }
    else {

        return(
            <>
            <article id="commentCard">
                <p className='text-black font-bold '>Author: <span className='text-black font-medium'>{comment.author}</span></p>
                <p className='text-black font-bold'>Posted: <span className='text-black font-medium'>{datePosted}</span></p>
                <section id='commentBody'>
                    <p className='text-black'>{comment.body}</p>
                </section>
                <button>
                    <img src="../assets/like.png" alt="Thumbs Up; like Button" className='h-11'/>
                    <p className='text-black font-bold'>{comment.votes} Likes</p>
                </button>
            </article>
            
            </>
        )
    }    
};

export default CommentCard;