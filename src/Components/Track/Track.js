import React from 'react';
import './Track.css';


export class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div class="Track-information">
          <h3>Tiny Dancer</h3>
          <p>Elton John | Madman Across The Water</p>
        </div>
        <a class="Track-action">+</a>
      </div>
    );
  }
}
