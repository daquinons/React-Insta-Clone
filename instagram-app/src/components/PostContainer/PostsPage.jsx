import React from "react";
import { Row, Col } from "reactstrap";
import PostContainer from "./PostContainer";

const PostsPage = ({ data }) => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        {data.map((post, index) => {
          return (
            <div className="post-container" key={index}>
              <PostContainer post={post} />
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default PostsPage;
