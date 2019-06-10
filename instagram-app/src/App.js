import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import { Container, Row, Col } from "reactstrap";
import dummyData from "./dummy-data";

function App() {
  const [data] = useState(dummyData);
  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [filteredData, setFilteredData] = useState(undefined);

  const onSearch = event => {
    filterPostsByUsername(event.target.value);
  };

  const filterPostsByUsername = username => {
    if (username !== "") {
      const filteredPosts = data.filter(post =>
        post.username.includes(username)
      );
      setFilteredData(filteredPosts);
    } else {
      setFilteredData(undefined);
    }
  };

  useEffect(() => {
    if (filteredData) {
      setDataToDisplay(filteredData);
    } else {
      setDataToDisplay(data);
    }
  }, [data, filteredData]);

  return (
    <div className="App">
      <Container fluid id="App-main">
        <header className="App-header">
          <SearchBar onSearch={onSearch} />
        </header>

        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            {dataToDisplay.map((post, index) => {
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
