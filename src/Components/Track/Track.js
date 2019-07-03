import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(event) {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    console.log(this.props);
    console.log("Removal Status: "+this.props.isRemoval);
    if (!this.props.isRemoval) {
      console.log('Found SearchList Track');
      return <button className="Track-action" onClick={this.addTrack}>+</button>;
    }
    console.log('Found Playlist Track');
    return <button className="Track-action" onClick={this.removeTrack}>-</button>
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
