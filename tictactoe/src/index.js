import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Square = ({ squareValue, onClick }) => (
  <button className="square" onClick={onClick}>
    {squareValue}
  </button>
);

const Board = () => {
  const [boardValue, setBoardValue] = useState(Array(9).fill(null));
  const [isX, setX] = useState(true);

  const renderSquare = num => (
    <Square
      squareValue={boardValue[num]}
      onClick={() => {
        // creating new array
        const newBoardValue = boardValue.slice();
        newBoardValue[num] = isX ? "X" : "O";
        setBoardValue(newBoardValue);
        setX(!isX);
      }}
    />
  );

  const gameStatus = `Player ${isX ? 'X': 'O'} moves`;

  return (
    <div>
      <div className="status">{gameStatus}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
