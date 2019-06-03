import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <div id="App-main">
        {dummyData.map((post, index) => {
          return (
            <div className="post-container" key={index}>
              <PostContainer post={post} />
            </div>
        )})}
      </div>
    </div>
  );
}

export default App;
