import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  padding-top: 0.7rem;
  margin-bottom: 2rem;
  margin-left: -15px;
  margin-right: -15px;
  height: 77px;

  @media only screen and (max-width: 600px) {
    height: 130px;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .logo {
    max-height: 55px;
  }

  .icons {
    height: 32px;
  }
`;

const StyledInputField = styled.input`
  background-color: #fafafa;
  border-radius: 3px;
  border: solid 1px #dbdbdb;
  margin-top: 0.75rem;
`;

const SearchBar = ({ onSearch, display }) => {
  const [shouldDisplay, setShouldDisplay] = useState(display);

  useEffect(() => {
    setShouldDisplay(display);
  }, [display]);

  if (!shouldDisplay) {
    return null;
  }

  return (
    <StyledHeader id="header">
      <Row className="text-center">
        <Col className="justify-content-center align-self-center">
          <img
            className="img-fluid logo"
            src=""
            alt=""
            srcSet="./img/ig_logo.png"
          />
        </Col>
        <Col className="justify-content-center align-self-center">
          <label>
            <StyledInputField
              onChange={onSearch}
              type="text"
              className="text-center"
              name="search"
              placeholder="Search"
            />
          </label>
        </Col>
        <Col className="justify-content-center align-self-center">
          <img className="icons" src="" alt="" srcSet="./img/ig_icons.png" />
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default SearchBar;
