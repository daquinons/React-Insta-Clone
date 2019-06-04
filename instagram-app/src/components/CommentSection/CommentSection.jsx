import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Input } from "reactstrap";
import "./CommentSection.css";

let CommentSection = ({ comments, timeAgo }) => {
  const [storedComments, setStoredComments] = useState(comments);
  const [commentFormInput, setCommentFormInput] = useState("");

  useEffect(() => {
    setStoredComments(storedComments);
  }, [storedComments]);

  const addnewComment = () => {
    const idLastCommentNumber = Number(
      storedComments[storedComments.length - 1].id
    );
    let newComment = {
      id: String(idLastCommentNumber + 1),
      username: "arandomuser",
      text: commentFormInput
    };

    setStoredComments(storedComments.concat(newComment));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addnewComment();
    setCommentFormInput("");
  };

  const handleChange = event => {
    setCommentFormInput(event.target.value);
  };

  return (
    <>
      <div className="comment-section">
        {storedComments.map((comment, index) => {
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
        <form onSubmit={handleSubmit.bind(this)}>
          <Input
            value={commentFormInput}
            type="text"
            name="comment"
            className="comment-form"
            placeholder="Add a comment..."
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};

export default CommentSection;
