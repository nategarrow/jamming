import React from 'react';
import {TrackList} from '../TrackList/TrackList';
import './SearchResults.css';


let song = {name: 'Here With Me', band: 'CHVRCHES', album: 'Love is Dead', link: 'https://open.spotify.com/album/7EchhykwUf4ACDDABEDa7o'};

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults" >
        <TrackList />
      </div>
    )
  }
}
