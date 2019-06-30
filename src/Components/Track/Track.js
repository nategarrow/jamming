import React from 'react';
import './Track.css';


export class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.song.name}</h3>
          <p>{this.props.song.band} | {this.props.song.album}</p>
        </div>
        <a className="Track-action" href={this.props.song.link} target="_blank">Link</a>
      </div>
    );
  }
}
