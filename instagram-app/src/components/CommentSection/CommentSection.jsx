import React from 'react';
import Comment from './Comment';

let CommentSection = ({ comments }) => {
  return comments.map(comment => {
    return <Comment comment={comment} />;
  })
};

export default CommentSection;