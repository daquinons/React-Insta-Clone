import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Input } from "reactstrap";
import "./CommentSection.css";

let CommentSection = ({ comments, timeAgo }) => {

  const [storedComments, setStoredComments] = useState([]);

  useEffect(() => {
    setStoredComments(comments);
  },[comments]);
  
  return (
    <>
      <div className="comment-section">
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <Comment comment={comment} />
            </div>
          );
        })}
      </div>
      <div>
        {timeAgo}
        <hr />
        <Input
          type="text"
          name="comment"
          className="comment-form"
          placeholder="Add a comment..."
        />
      </div>
    </>
  );
};

export default CommentSection;
