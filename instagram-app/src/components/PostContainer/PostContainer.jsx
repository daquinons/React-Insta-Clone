import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import pt from "prop-types";
import moment from "moment";
import PostIcons from "./PostIcons";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const getDiffDateInWeeks = timestamp => {
    const now = moment(new Date());
    const toCompare = moment(timestamp, "MMMM Do YYYY, hh:mm:ss a");
    const duration = moment.duration(now.diff(toCompare));
    const diffDateInWeeks = Math.round(duration.asWeeks());

    return diffDateInWeeks;
  };

  const createTimeAgoElement = timestamp => {
    return (
      <CardText className="date">
        {getDiffDateInWeeks(timestamp)} WEEKS AGO
      </CardText>
    );
  };

  const likePost = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card-post">
      <Card>
        <CardBody>
          <CardTitle className="blue-bold">
            <img
              className="thumbnail-image"
              alt=""
              srcSet={post.thumbnailUrl}
            />
            &nbsp; {post.username}
          </CardTitle>
        </CardBody>
        <CardImg top width="100%" src={post.imageUrl} />
        <CardBody>
          <PostIcons likeHandler={likePost} />
          <CardText className="blue-bold">{likes} likes</CardText>
          <CommentSection
            parentId={post.id}
            comments={post.comments}
            timeAgo={createTimeAgoElement(post.timestamp)}
          />
        </CardBody>
      </Card>
    </div>
  );
};

PostContainer.propTypes = {
  post: pt.shape({
    id: pt.string.isRequired,
    username: pt.string.isRequired,
    thumbnailUrl: pt.string.isRequired,
    imageUrl: pt.string.isRequired,
    likes: pt.number.isRequired,
    timestamp: pt.string.isRequired,
    comments: pt.arrayOf(pt.object).isRequired
  }).isRequired
};

export default PostContainer;
