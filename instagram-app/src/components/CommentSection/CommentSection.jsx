import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

let CommentSection = ({ comments }) => {
  return (
    <div className="comment-section">
      {comments.map((comment, index) => {
        return(
          <div key={index}>
            <Comment comment={comment} />
          </div>
        );
      })}
    </div>
  )
};

export default CommentSection;