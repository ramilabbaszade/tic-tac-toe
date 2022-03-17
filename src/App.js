import { useState } from "react";
import "./App.css";

function App() {
  const [gameGrid, setGameGrid] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const winningMatchs = [1,2,3]
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [firstPlayerTicks, setFirstPlayerTicks] = useState([]);
  const [secondPlayerTicks, setSecondPlayerTicks] = useState([]);

  const setGameCell = async (index) => {
    if(gameGrid[index] === "")
    {let inputValue = currentPlayer === 1 ? "X" : "O";
    setGameGrid(
      gameGrid.map((btn, i) => {
        if (!btn && index === i) return inputValue;
        else return btn;
      })
    );
    if (currentPlayer === 1 && firstPlayerTicks.length < 3) {
      firstPlayerTicks.push(index);
    } else if(currentPlayer === 2 && secondPlayerTicks.length < 3) {
      secondPlayerTicks.push(index);
    }

    setFirstPlayerTicks(firstPlayerTicks);
    setSecondPlayerTicks(secondPlayerTicks);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);

    console.warn("firstPlayerTicks",firstPlayerTicks.toString());
    console.warn("secondPlayerTicks",secondPlayerTicks.toString());}
    if(is_same(firstPlayerTicks,winningMatchs)){
      alert("First player WON")
    }
    if(is_same(secondPlayerTicks,winningMatchs)){
      alert("Second player WON")
    }
    
    
  };
  const is_same = (array1, array2) => {
    return array1.toString() === array2.toString()
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="game_canvas">
        {currentPlayer}
        <div className="container">
          {gameGrid.map((cell, index) => {
            return (
              <div
                key={index}
                className="cell"
                onClick={() => setGameCell(index)}
              >
                <span>{cell}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
