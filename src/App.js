import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import './App.css';
import bulbasaur from './images/bulbasaur.jpg';
import ivysaur from './images/ivysaur.jpg';
import venusaur from './images/venusaur.jpg';
import charmander from './images/charmander.jpg';
import charmeleon from './images/charmeleon.jpg';
import charizard from './images/charizard.jpg';
import squirtle from './images/squirtle.jpg';
import wartortle from './images/wartortle.jpg';
import blastoise from './images/blastoise.jpg';
import caterpie from './images/caterpie.jpg';
import metapod from './images/metapod.jpg';
import butterfree from './images/butterfree.jpg';
import weedle from './images/weedle.jpg';
import kakuna from './images/kakuna.jpg';
import beedrill from './images/beedrill.jpg';
import pikachu from './images/pikachu.jpg';




const App = () => {
  const [score, setScore] = useState(0); 
  const [maxScore, setMaxScore] = useState(0);
  const [cardOrder, setCardOrder] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  
  const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  const imagedata = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pikachu",
  ];
  const imagePaths = [
    bulbasaur,
    ivysaur,
    venusaur,
    charmander,
    charmeleon,
    charizard,
    squirtle,
    wartortle,
    blastoise,
    caterpie,
    metapod,
    butterfree,
    weedle,
    kakuna,
    beedrill,
    pikachu,
  ];

  const scoreFunc = (ev) => {
    const clickedCard = ev.target.id;
    if(!clickedCards.includes(clickedCard)){
      setClickedCards([...clickedCards, clickedCard]);
      setScore(score + 1);
    }
    else {
      if(maxScore < score){
        setMaxScore(score);
      }
      setScore(0);
      setClickedCards([]);
    }
  }

  const playAgain = () => {
    setMaxScore(16);
    setGameWon(false);
    setScore(0);
  }

  useEffect(() => {
    if(score === 16){
      setGameWon(true);
      setClickedCards([]);
    }
    else {
      generateRandomCardOrder();
    } 
  },[score]);


  const generateRandomCardOrder = () => {
    let listOfDrawnCard = [];
    let count = 0;
    while(count < 16 ){
      let index = Math.floor(Math.random() * 16);
      if(!listOfDrawnCard.includes(index)){
        listOfDrawnCard.push(index);
        count++;
      }
    }
    setCardOrder(listOfDrawnCard);
  };

  const returnRight = () => {
    if(!gameWon){
      return (
      <div className="app">
        <p>Score: {score}</p>
        <p>Max score: {maxScore}</p>
        <div className="card-container">
          {cardOrder.map((element, i) => {
            return <Card  key={ids[i]} name={imagedata[element]} path={imagePaths[element]} scoreFunc={scoreFunc}/>
          })}
        </div>
      </div>
      );
    }
    else  {
      return (
        <div className="app">
          <h2>Game Won Play Again ?</h2>
          <button onClick={playAgain}>Play</button>
        </div>
      );
    }
  };

  return (
    returnRight()
  );
}

export default App;
