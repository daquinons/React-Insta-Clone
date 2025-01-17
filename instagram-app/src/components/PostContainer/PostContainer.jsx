import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import pt from "prop-types";
import moment from "moment";
import styled from "styled-components";
import PostIcons from "./PostIcons";
import CommentSection from "../CommentSection/CommentSection";

const StyledCard = styled.div`
  max-width: 614px;
  margin-bottom: 2rem;

  .card {
    border-radius: 3px;
  }

  .card-title {
    margin: 0 !important;
  }

  .post-icon {
    margin-right: 1rem;
    width: 1.75rem;
  }

  .date {
    color: #999;
    font-size: 12px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }

  .comment-form {
    border-width: 0 !important;
  }

  .blue-bold {
    font-weight: 600;
    color: #262626;
  }
`;

const StyledThumbnail = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  -webkit-box-direction: normal;
  border: 1px solid rgb(0, 53, 105);
`;

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
    <StyledCard>
      <Card>
        <CardBody>
          <CardTitle className="blue-bold">
            <StyledThumbnail srcSet={post.thumbnailUrl} />
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
    </StyledCard>
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
