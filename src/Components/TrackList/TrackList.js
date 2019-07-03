import React from 'react';
import {Track} from '../Track/Track';
import './TrackList.css';

export class TrackList extends React.Component {
  render() {
    // console.log(this.props.tracks);
    if(this.props.tracks) {
      return (
        <div className="TrackList">
          {this.props.tracks.map(track=>{
            return <Track key={track.id} track={track} onAdd={this.props.onAdd}/>
          })}
        </div>
      )
    } else {
      return (
        <div className="TrackList">
        </div>
      )
    }
  }
}
