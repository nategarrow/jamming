import React from 'react';
import {Track} from '../Track/Track';
import './TrackList.css';


let song = {name: 'Here With Me', band: 'CHVRCHES', album: 'Love is Dead', link: 'https://open.spotify.com/album/7EchhykwUf4ACDDABEDa7o'};

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <Track className="Track" song={song} />
        <Track className="Track" song={song} />
        <Track className="Track" song={song} />
        <Track className="Track" song={song} />
        <Track className="Track" song={song} />
      </div>
    )
  }
}
