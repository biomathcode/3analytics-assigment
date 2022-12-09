import { FC } from "react";
import { CommentTypes } from "../../types";

const CommentCard:FC<CommentTypes> =(comment) => {
    return ( 
        <div className="comments">
            <div className="fs-12">
                {comment.email + " " + "says:"}
            </div>
            <div className="fs-14">
                {comment.name}

            </div>
            <div className="fs-14">
                {comment.body}
            </div>
        </div>
     );
}

export default CommentCard;