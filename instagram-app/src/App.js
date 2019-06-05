import React, { useEffect, useState } from "react";
import withAuthenticate from "./authentication/withAuthenticate";
import SearchBar from "./components/SearchBar/SearchBar";
import PostsPage from "./components/PostContainer/PostsPage";
import { Container } from "reactstrap";
import dummyData from "./dummy-data";
import "./App.css";

function App() {
  const [data] = useState(dummyData);
  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [filteredData, setFilteredData] = useState(undefined);
  const PostsPageWithAuthenticate = withAuthenticate(PostsPage);

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
        <SearchBar onSearch={onSearch} />
        <PostsPageWithAuthenticate data={dataToDisplay} />
      </Container>
    </div>
  );
}

export default App;
