import './App.css';
import React from 'react';
import MainPage from "./components/MainPage"
import Game from "./components/Game"
import Data from "./data" 


function App() {
  const [gameStarted, setGameStarted] = React.useState(false)
  const [data, setData] = React.useState(Data)
  const [isChecked, setIsChecked] = React.useState(false)
  const [score, setScore] = React.useState(0)

  function startGame(){
    setGameStarted(true)
  }

  function chooseAnswer(questId ,answerId){
    let newSelected
    setData(data.map(ques =>
       { 
        if(ques.id === questId){
       ques.selectedAnswer === answerId ?  newSelected = 0 : newSelected = answerId
       return {...ques, selectedAnswer: newSelected} }
       else{
        return ques
       } }))
  }

  function countScore(){
    data.forEach(question => {
     if(question.selectedAnswer === question.correctAnswer){
      setScore(oldScore => oldScore + 1 )
     }
    })
  }

  function checkAnswers(){
    countScore()
    setIsChecked(true)
  }

  function newGame(){
    setData(data.map( question => {
      return {...question,
      selectedAnswer:0
    }}))
    setGameStarted(false)
    setIsChecked(false)
    setScore(0)
  }
  
  return (
    <div className="App">
      { !gameStarted ? <MainPage startGame={startGame} /> : <Game data={data} chooseAnswer={chooseAnswer} score={score} newGame={newGame} checkAnswers={checkAnswers} isChecked={isChecked}/>}
    </div>
  );
}

export default App;
