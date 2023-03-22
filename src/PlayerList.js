import React, { Component } from "react";
import Player from "./Player";
class PlayerList extends Component {
//   handleLeaveSystem = (playerIndex) => {
//     this.props.onLeaveSystem(playerIndex);
//   };

  render() {
    const { players } = this.props;

    return (
      <div className="player-list">
        <h2>Player List</h2>
        <ul>
          {players.map((player, index) => (
            <Player
              key={index}
              name={player.name}
              gamesPlayed={player.gamesPlayed}
              bestScore={player.bestScore}
              score={player.score}
            //   onLeaveSystem={() => this.handleLeaveSystem(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default PlayerList;
