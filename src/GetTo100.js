import React, { Component } from "react";
import Game from "./Game";
import PlayerList from "./PlayerList";
import "./GetTo100.css";

class GetTo100 extends Component {
  constructor(props) {
    super(props);

    let users = [];
    let usersJson = localStorage.getItem("users100");
    if (usersJson) {
      users = JSON.parse(usersJson);
    } else {
      localStorage.setItem("users100", JSON.stringify([]));
    }
    console.log(users);
    this.state = {
      players: this.props.users.map((user) => ({
        name: user,
        score: Math.floor(Math.random() * 99) + 1,
        games: users.find((u) => u.username === user).games,
      })),
      activePlayerIndex: 0,
      steps: 1,
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
    if (nextActivePlayerIndex === 0) {
      this.setState((oldState) => ({ steps: oldState.steps + 1 })); ////////////
    }
    this.setState({ activePlayerIndex: nextActivePlayerIndex, players }); ///////////////event!!
    // this.setState((oldState) => ({
    //   activePlayerIndex: (oldState.activePlayerIndex + 1) % oldState.players.length,
    //   players: [...oldState.players.slice(),],
    // }));
  };

  handleWinnig = (winner) => {
    let users = [];
    let usersJson = localStorage.getItem("users100");
    if (usersJson) {
      users = JSON.parse(usersJson);
    } else {
      localStorage.setItem("users100", JSON.stringify([]));
    }
    const userIndex = users.findIndex((user) => user.username === winner);

    if (userIndex > -1) {
      users[userIndex].games.push(this.state.steps);
    }
    localStorage.setItem("users100", JSON.stringify(users));
    if (window.confirm("Press a button!") == true) {
      //this.props.c
      this.props.playAgain();
    } else {
      this.props.endGame();
    }
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
            steps={this.state.steps}
            winnig={this.handleWinnig}
          />
        </div>
      </div>
    );
  }
}

export default GetTo100;
