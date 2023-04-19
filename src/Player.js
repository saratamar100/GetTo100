import React, { Component } from "react";
class Player extends Component {
  //   handleLeaveSystem = () => {
  //     this.props.onLeaveSystem();
  //   };

  render() {
    const { name, score, active } = this.props;
    let style = {};
    if (active) {
      style = { backgroundColor: "yellow" };
    }
    return (
      <li style={style}>
        <span>
          {name} - 
        </span>
        <h5 style={{display:"inline"}}>{score}</h5>
        <h2>{this.props.games.join()}</h2>
      </li>
    );
  }
}
export default Player;
