import React, { Component } from "react";
import Game from "./Game";
import PlayerList from "./PlayerList";

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
    // }
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
      <div className="app">
        <PlayerList players={players} />
        <Game
          players={players}
          activePlayerIndex={activePlayerIndex}
          onGameCompletion={this.handleGameCompletion}
          setActivePlayerIndex={this.setActivePlayerIndex}
          score={this.state.players[this.state.activePlayerIndex].score}
        />
      </div>
    );
  }
}

export default GetTo100;
