import { useState } from "react";

function Comments({ video }) {
    
    const[displayComments, setDisplayComments] = useState(true);
    const[comments, setComments] = useState(video.comments)

    function handleDisplayComments() {
        setDisplayComments(!displayComments);
    }

    function handleRemoveComment(id) {
        console.log(id)
        const newComments = comments.filter((comment) => comment.id !== id)
        setComments(newComments)
    }

    const myComments = comments.map(comment => {
        return(
            <>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <button onClick={e => handleRemoveComment(comment.id)}>Remove Comment</button>
            </>
        );
    })
    
    return (
        <div>
            <button onClick={handleDisplayComments}>{displayComments ? "Hide Comments" : "Show Comments"}</button>
            <h2>Comments</h2>
            {displayComments ? myComments : null }
        </div>
    );
}

export default Comments;