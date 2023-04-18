import React, { Component } from "react";
class Player extends Component {
  //   handleLeaveSystem = () => {
  //     this.props.onLeaveSystem();
  //   };

  render() {
    const { name, gamesPlayed, bestScore, score, active } = this.props;

    return (
      <li style={{ backgroundColor: "yellow" }}>
        <span>
          {name} - Games Played: {gamesPlayed} - Best Score: {bestScore}
        </span>
        <h5>{score}</h5>
      </li>
    );
  }
}
export default Player;
