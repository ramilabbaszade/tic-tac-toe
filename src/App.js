import { useState } from "react";
import "./App.css";

function App() {
  const [gameGrid, setGameGrid] = useState([
    "","","",
    "","","",
    "","","",
  ]);
  // const winningMatchs = [1,2,3]
  const [currentPlayer,setCurrentPlayer] = useState(1)
  const [firstPlayerTicks,setFirstPlayerTicks] = useState([])
  const [secondPlayerTicks,setSecondPlayerTicks] = useState([])

  const setGameCell = async (index) => {
    let inputValue = currentPlayer === 1 ? "X" : "O"
    setGameGrid(
      gameGrid.map((btn, i) => {
          if (!btn && index === i) return inputValue;
          else return btn;
      })
    );
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
    if(currentPlayer === 1){
      firstPlayerTicks.push(index)
    }else{
      secondPlayerTicks.push(index)
    }

    setFirstPlayerTicks(firstPlayerTicks)
    setSecondPlayerTicks(secondPlayerTicks)
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
