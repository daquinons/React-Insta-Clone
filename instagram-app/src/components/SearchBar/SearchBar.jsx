import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <Row className="text-center" id="header">
      <Col className="justify-content-center align-self-center" xs="6" sm="4">
        <img
          className="img-fluid logo"
          src=""
          alt=""
          srcSet="./img/ig_logo.png"
        />
      </Col>
      <Col xs="6" sm="4" className="justify-content-center align-self-center">
        <label>
          <input
            type="text"
            className="text-center"
            name="search"
            id="search-field"
            placeholder="Search"
          />
        </label>
      </Col>
      <Col className="justify-content-center align-self-center" xs="6" sm="4">
        <img className="icons" src="" alt="" srcSet="./img/ig_icons.png" />
      </Col>
    </Row>
  );
};

export default SearchBar;
