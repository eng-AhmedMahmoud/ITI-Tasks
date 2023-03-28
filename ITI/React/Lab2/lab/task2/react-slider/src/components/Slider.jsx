import React, { Component } from 'react'

export default class Slider extends Component {
  state = {
    images: [
      "Images/1.jpg",
      "Images/2.jpg",
      "Images/3.jpg",
      "Images/4.jpg",
      "Images/5.jpg",
      "Images/6.jpg",
    ],
    i: 0,
  };

  prevImg = () => {
    let i = this.state.i;
    if (i <= 0) i = this.state.images.length;
    i--;
    this.setState({ i });
  }

  nextImg = () => {
    let i = this.state.i;
    if (i >= this.state.images.length - 1) i = -1;
    i++;
    this.setState({ i });
  }

  render() {
    return (
      <>
        <span>------------------------------</span>
        <h1>&nbsp; Show Pics</h1>
        <span>------------</span>
        <br />
        <br />
        <input id="pb" type="button" onClick={this.prevImg} value="previous" />
        <input id="nb" type="button" onClick={this.nextImg} value="next" />
        <br />
        <br />
        <img
          src={this.state.images[this.state.i]}
          id="img"
          width="200"
          height="200"
          alt="slider"
        />
      </>
    );
  }
}
