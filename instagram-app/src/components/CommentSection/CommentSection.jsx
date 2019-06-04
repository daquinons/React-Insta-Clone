import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Input } from "reactstrap";
import "./CommentSection.css";

let CommentSection = ({ parentId, comments, timeAgo }) => {
  const savedItem = JSON.parse(window.localStorage.getItem("comments" + parentId));
  const toInitialize = savedItem ? savedItem : comments;
  const [storedComments, setStoredComments] = useState(toInitialize);
  const [commentFormInput, setCommentFormInput] = useState("");

  const saveToStorage = () => {
    window.localStorage.setItem("comments" + parentId, JSON.stringify(storedComments));
    console.log(JSON.parse(window.localStorage.getItem("comments" + parentId)));
  };

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

  useEffect(() => {
    saveToStorage();
  }, [storedComments]);
  
  if (storedComments) {
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
          <form onSubmit={handleSubmit}>
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
  } else {
    return <div></div>
  }

};

export default CommentSection;
