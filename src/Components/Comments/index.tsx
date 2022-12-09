import React from "react";
import { getCommentsByPostId } from "../../api";
import { CommentTypes } from "../../types";
import LoadingIndicator from "../LoadingIndicator.tsx";
import CommentCard from "./CommentCard";

interface CommentsProps {
  postId: string;
}

interface CommentsState {
  isFetching: boolean;
  data: CommentTypes[] | [];
}

class Comments extends React.Component<CommentsProps, CommentsState> {
  state: CommentsState = {
    isFetching: true,
    data: [],
  };

  async fetcher(id: string) {
    const data = await getCommentsByPostId(id);
    this.setState({
      isFetching: false,
      data,
    });
    console.log(data);
  }

  componentDidMount(): void {
    this.fetcher(this.props.postId);
  }
  render() {
    const { data, isFetching } = this.state;

    return (
      <div className="container flex col  jc  center ">
        <p className="fs-20 " >Comments</p>
        
        {isFetching && <LoadingIndicator />}
        {data.map((comment) => {
          return (
            <CommentCard
              key={comment.id}
              body={comment.body}
              name={comment.name}
              email={comment.email}
            />
          );
        })}
      </div>
    );
  }
}

export default Comments;
