import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Input
} from "reactstrap";
import moment from "moment";
import PostIcons from './PostIcons';
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = ({ post }) => {
  const getDiffDateInWeeks = timestamp => {
    const now = moment(new Date());
    const toCompare = moment(timestamp, "MMMM Do YYYY, hh:mm:ss a");
    const duration = moment.duration(now.diff(toCompare));
    const diffDateInWeeks = Math.round(duration.asWeeks());

    return diffDateInWeeks;
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
          <PostIcons />
          <CardText className="blue-bold">{post.likes} likes</CardText>
          <CommentSection comments={post.comments} />
          <CardText className="date">
            {getDiffDateInWeeks(post.timestamp)} WEEKS AGO
          </CardText>
          <hr />
          <Input
            type="text"
            name="comment"
            className="comment-form"
            placeholder="Add a comment..."
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default PostContainer;
