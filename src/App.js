import React from 'react';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {SearchResults} from './Components/SearchResults/SearchResults';
import {Playlist} from './Components/Playlist/Playlist';

import './App.css';

function App() {
  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
