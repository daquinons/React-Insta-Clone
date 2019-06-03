import React from 'react';
import pt from 'prop-types';

let Comment = ({ comment }) => {
  return <p><span className="blue-bold">{comment.username}</span> {comment.text}</p>
}

Comment.propTypes = {
  comment: pt.shape({
    id: pt.string.isRequired,
    username: pt.string.isRequired,
    text: pt.string.isRequired,
  }),
}

export default Comment;