import React from 'react';
import {Track} from '../Track/Track';
import './TrackList.css';

export class TrackList extends React.Component {
  render() {
    // console.log(this.props.tracks);
    if(!this.props.isRemoval) {
      return (
        <div className="TrackList">
          {this.props.tracks.map(track=>{
            return <Track key={track.id} track={track} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval}/>
          })}
        </div>
      )
    } else {
      return (
        <div className="TrackList">
          {this.props.tracks.map(track=>{
            return <Track key={track.id} track={track} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
          })}
        </div>
      )
    }
  }
}
