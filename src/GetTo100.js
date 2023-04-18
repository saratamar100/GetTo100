import React, { Component } from "react";
import Game from "./Game";
import PlayerList from "./PlayerList";
import "./GetTo100.css";

class GetTo100 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: this.props.users.map((user) => ({
        name: user,
        gamesPlayed: 0,
        bestScore: null,
        score: Math.floor(Math.random() * 99) + 1,
      })),
      activePlayerIndex: 0,
    };
  }

  handleGameCompletion = (playerIndex) => {
    //Father Function
    const { players, activePlayerIndex } = this.state;
    const player = players[playerIndex];
    //player.gamesPlayed += 1;
    // if (!player.bestScore || score < player.bestScore) {
    //   player.bestScore = score;
    // }3
    this.setActivePlayerIndex();

    this.setState({ players });
  };

  setActivePlayerIndex = (newScore) => {
    const { players, activePlayerIndex } = this.state;
    players[activePlayerIndex].score = newScore;
    const nextActivePlayerIndex = (activePlayerIndex + 1) % players.length;
    this.setState({ activePlayerIndex: nextActivePlayerIndex, players }); ///////////////event!!
  };

  render() {
    const { players, activePlayerIndex } = this.state;

    return (
      <div className="get_to100">
        <h1 className="Header">Get to 100</h1>
        <div className="flex_continer">
          <PlayerList
            players={players}
            activePlayerIndex={this.state.activePlayerIndex}
          />
          <Game
            players={players}
            activePlayerIndex={activePlayerIndex}
            onGameCompletion={this.handleGameCompletion}
            setActivePlayerIndex={this.setActivePlayerIndex}
            score={this.state.players[this.state.activePlayerIndex].score}
          />
        </div>
      </div>
    );
  }
}

export default GetTo100;
