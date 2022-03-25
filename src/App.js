import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState();

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (!winner) {
      if (cells[num] !== "") {
        alert("already clicked");
        return;
      }

      let squares = [...cells];

      if (turn === "x") {
        squares[num] = "x";
        setTurn("o");
      } else {
        squares[num] = "o";
        setTurn("x");
      }

      checkForWinner(squares);
      setCells(squares);
    }
  };

  const onRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
    setTurn("x")
  };

  return (
    <div className="App">
      <div className={`p ${turn === "x" && "p1"}`}>X</div>
      <div className={`p ${turn === "o" && "p2"}`}>O</div>
      <div className="game_canvas">
        <div className="container">
          {cells.map((cell, index) => {
            return (
              <div
                key={index}
                className="cell"
                onClick={() => handleClick(index)}
              >
                <span>{cell}</span>
              </div>
            );
          })}
        </div>
        <div>
          {winner && (
            <div className="winnerboard">
              <p><b>{winner}</b> is winner!</p>
              <button onClick={() => onRestart()}>Play Again</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
