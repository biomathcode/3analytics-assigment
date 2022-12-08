import { FC } from "react";
import { CommentTypes } from "../../types";

const CommentCard:FC<CommentTypes> =(comment) => {
    return ( 
        <div>
            <div>
                {comment.name}

            </div>
            <div>
                {comment.body}
            </div>
        </div>
     );
}

export default CommentCard;