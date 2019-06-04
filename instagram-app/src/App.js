import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import { Container, Row, Col } from "reactstrap";
import dummyData from "./dummy-data";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const receivedData = dummyData;
    setData(receivedData);
  },[]);

  return (
    <div className="App">
      <Container fluid id="App-main">
        <header className="App-header">
          <SearchBar />
        </header>
      
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
      </Container>
    </div>
  );
}

export default App;
