import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistTracks: [],
      playlistName: 'New Playlist'
    };

    // Bind new methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let savedTracks = this.state.playlistTracks;
    if (!savedTracks.find(savedTrack => savedTrack.id === track.id)) {
      savedTracks.push(track);
      this.setState({playlistTracks: savedTracks});
    }
  }

  removeTrack(track) {
    console.log('Running Removal');
    let savedTracks = this.state.playlistTracks;
    let newTracks = savedTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: newTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let tracks = this.state.playlistTracks;
    let name = this.state.playlistName;
    if(this.state.playlistTracks.length && this.state.playlistName) {
      let trackURIs = tracks.map(track=>track.uri);
      Spotify.savePlaylist(name, trackURIs);
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    document.getElementById("playlist-name").value = 'New Playlist';    
  }
  }

  search(term) {
    Spotify.search(term).then(results=>{
      this.setState({searchResults: results});
    });
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
