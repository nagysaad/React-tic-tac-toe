
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cell from "./components/cell";

const winningCompos = [
  [0 , 1 , 2],
  [3 , 4 , 5],
  [6 , 7 , 8],
  [0 , 3 , 6],
  [1 , 4 , 7],
  [ 2 , 5 ,8] , 
  [0 , 4 , 8],
  [2 , 4 , 6]

]


export default function Home() {
  const [cells , setCells] = useState([ "" , "" , "" , "" , "" , "" , "" , "" , "" ]);
  const [go , setGo] = useState("circle");
  const [winningMessage , setwinningmessage] = useState("");

  useEffect(() => {
    winningCompos.forEach(compo => {
      const circleWins = compo.every((cell) => cells[cell] === "circle");
      const crossWins = compo.every((cell) => cells[cell] === "cross");

      if(circleWins){
        setwinningmessage("Circle Wins!");

      } else if (crossWins){
        setwinningmessage("Cross Wins!");


      }

    });

  } , [cells])


  useEffect(() => {
    if (cells.every((cell) => cell != "" && !winningMessage)){
      setwinningmessage("Draw!")
    }

  } , [cells , winningMessage])

  return (
    <div className="container" >
      <div className="gameboard">
      {cells.map((cell , index) => (
        <Cell id={index} go={go}  setGo={setGo} key={index} cells={cells}
         setCells={setCells} cell={cell} winningMessage={winningMessage} />
      ))}
      </div>

      <div className="winning-message">{winningMessage}</div>

    {!winningMessage && <div className="turn-message">{`it is now ${go} turn`}</div> }
  
  
    </div>

  );
}
