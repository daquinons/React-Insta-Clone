import React from 'react';
import Comment from './Comment';

let CommentSection = ({ comments }) => {
  return comments.map((comment, index) => {
    return(
      <div key={index}>
        <Comment comment={comment} />
      </div>
    );
  });
};

export default CommentSection;