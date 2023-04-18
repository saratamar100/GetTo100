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
        <h2 className="PlayerList">Player List</h2>
        <ul>
          {players.map((player, index) => (
            <Player
              key={player.name}
              name={player.name}
              score={player.score}
              active={index == this.props.activePlayerIndex}
              //   onLeaveSystem={() => this.handleLeaveSystem(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default PlayerList;
