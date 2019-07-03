import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: 'Here With Me',
        album: 'CHVRCHES',
        artist: 'Love is Dead',
        id: '1'
      },{
        name: 'Wonderland',
        album: 'Love is Dead',
        artist: 'CHVRCHES',
        id: '2'
      }],
      playlistTracks: [{
        name: 'song 1',
        artist: 'artist 1',
        album: 'album 1',
        id:'1'
      }]
    };

    // Bind new methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let savedTracks = this.state.playlistTracks;
    if (!savedTracks.find(savedTrack => savedTrack.id === track.id)) {
      savedTracks.push(track);
      this.setState({playlistTracks: savedTracks});
    }
  }

  removeTrack(track) {
    let savedTracks = this.state.playlistTracks;
    let newTracks = savedTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: newTracks});
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
