import React, { Component } from 'react';

export default class CardFront extends Component {

  componentDidMount() {
    console.log(`url(../assets/poster-imgs/${this.props.poster}.png)`);
  }

  render() {
    return (
        <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    );
  }
}
