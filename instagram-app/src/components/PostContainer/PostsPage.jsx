import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import PostContainer from "./PostContainer";

const StyledDivPostContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const PostsPage = ({ data }) => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        {data.map((post, index) => {
          return (
            <StyledDivPostContainer key={index}>
              <PostContainer post={post} />
            </StyledDivPostContainer>
          );
        })}
      </Col>
    </Row>
  );
};

export default PostsPage;
