import React from "react";
import pt from "prop-types";
import styled from "styled-components";
//import "./CommentSection.css";

const StyledComment = styled.div`
  p {
    margin-bottom: 0.4rem;
  }
`;

let Comment = ({ comment }) => {
  return (
    <StyledComment>
      <p className="comment-p">
        <span className="blue-bold">{comment.username}</span> {comment.text}
      </p>
    </StyledComment>
  );
};

Comment.propTypes = {
  comment: pt.shape({
    id: pt.string.isRequired,
    username: pt.string.isRequired,
    text: pt.string.isRequired
  })
};

export default Comment;
