import React from 'react';
import pt from 'prop-types';
import './CommentSection.css';

let Comment = ({ comment }) => {
  return <p className="comment-p"><span className="blue-bold">{comment.username}</span> {comment.text}</p>
}

Comment.propTypes = {
  comment: pt.shape({
    id: pt.string.isRequired,
    username: pt.string.isRequired,
    text: pt.string.isRequired,
  }),
}

export default Comment;