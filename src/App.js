import { useState } from "react";

function Square({value, onSquareClick}){

  return(
  <button className="square" onClick={onSquareClick}>
    {value}
    </button>
  );
}

export default function Board() {
  //defaultはこのファイルのメイン関数を伝えている
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null) );

  function handleClick(i){
    //すでに値が格納されている場合または勝敗が決定している場合
 https://ja.react.dev/learn/thinking-in-react   if(squares[i] || calculateWinner(squares)){
      return
    }


    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[i] = "X";      
    }else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares)
    setXisNext(!xIsNext)
  };

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }else{
    status = "Next player: " + (xIsNext ? "X": "O");
  }


  return (
    <>
    <dev className="status">{status}</dev>
    <dev className="board-row">
      <Square value={squares[0]} onSquareClick={() =>handleClick(0)} />
      <Square value={squares[1]}onSquareClick={() =>handleClick(1)}/>
      <Square value={squares[2]}onSquareClick={() =>handleClick(2)}/>
    </dev>
    <dev className="board-row">
      <Square value={squares[3]}onSquareClick={() =>handleClick(3)}/>
      <Square value={squares[4]}onSquareClick={() =>handleClick(4)}/>
      <Square value={squares[5]}onSquareClick={() =>handleClick(5)}/>
    </dev>
    <dev className="board-row">
      <Square value={squares[6]}onSquareClick={() =>handleClick(6)}/>
      <Square value={squares[7]}onSquareClick={() =>handleClick(7)}/>
      <Square value={squares[8]}onSquareClick={() =>handleClick(8)}/>
    </dev>

    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
