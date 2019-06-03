import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SearchBar = () => {
  return(
      <Row className="text-center">
        <Col className="justify-content-center align-self-center" xs="6" sm="4">
          <img className="img-fluid" src="" alt="" srcset="./img/ig_logo.png"/>
        </Col>
        <Col xs="6" sm="4" className="justify-content-center align-self-center">
          <input type="text" className="text-center" name="search" id="search-field" placeholder="Search" />
        </Col>
        <Col className="justify-content-center align-self-center" xs="6" sm="4">
          <img className="img-fluid" src="" alt="" srcset="./img/ig_icons.png"/>
        </Col>
      </Row>
  )
}

export default SearchBar;