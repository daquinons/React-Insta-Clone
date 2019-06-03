import React from 'react';

let Comment = ({ comment }) => {
  return <p><span className="blue-bold">{comment.username}</span> {comment.text}</p>
}

export default Comment;