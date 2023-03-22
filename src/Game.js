import React, { Component } from "react";

class Game extends Component {
  handleGameCompletion = () => {
    //Son Function
    const { players, activePlayerIndex, onGameCompletion } = this.props;
    onGameCompletion(activePlayerIndex); //, this.state.actions.length);
    //const nextActivePlayerIndex = (activePlayerIndex + 1) % players.length;
    // this.setState({
    //   score: Math.floor(Math.random() * 100),
    //   actions: [],
    // });
    //this.props.setActivePlayerIndex(nextActivePlayerIndex);

    alert(players[activePlayerIndex].name + " won!!!!:)");
  };

  handleAction = (action) => {
    const {
      players,
      activePlayerIndex,
      onGameCompletion,
      setActivePlayerIndex,
      score,
    } = this.props;

    let newScore;
    switch (action) {
      case "+1":
        newScore = score + 1;
        break;
      case "-1":
        newScore = score - 1;
        break;
      case "*2":
        newScore = score * 2;
        break;
      case "/2":
        newScore = Math.floor(score / 2);
        break;
      default:
        return;
    }

    if (newScore === 100) {
      this.handleGameCompletion();
      //onGameCompletion(activePlayerIndex);
    } else {
      setActivePlayerIndex(newScore);
    }
  };

  render() {
    const { players, activePlayerIndex } = this.props;
    const activePlayer = players[activePlayerIndex];

    return (
      <div className="game">
        <h2>Get to 100</h2>
        <div className="score">{this.props.score}</div>
        <div className="actions">
          <button onClick={() => this.handleAction("+1")}>+1</button>
          <button onClick={() => this.handleAction("-1")}>-1</button>
          <button onClick={() => this.handleAction("*2")}>*2</button>
          <button onClick={() => this.handleAction("/2")}>/2</button>
        </div>
        <div className="info">
          <div className="active-player">{activePlayer.name}'s turn</div>
        </div>
      </div>
    );
  }
}

export default Game;
