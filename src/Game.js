import React, { Component } from "react";
import CartIcon from '../src/media/kubiya.jpg';


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

    alert(players[activePlayerIndex].name + " won!!!!:)"+" with "+this.props.steps);
    this.props.winnig(players[activePlayerIndex].name);
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
        <img className="kubiyaR" src={CartIcon}/>
        <img className="kubiyaL" src={CartIcon}/>
        <div className="score">{this.props.score}</div>
        <div className="actions">
          <button onClick={() => this.handleAction("+1")}>+1</button>
          <button onClick={() => this.handleAction("-1")}>-1</button>
          <button onClick={() => this.handleAction("*2")}>*2</button>
          <button onClick={() => this.handleAction("/2")}>/2</button>
        </div>
        <div className="info" >
          <div className="active-player">{activePlayer.name}'s turn</div>
        </div>
        <p>{this.props.steps} steps</p>
      </div>
    );
  }
}

export default Game;
