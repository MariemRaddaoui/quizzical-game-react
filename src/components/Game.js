import React from "react"
import Question from "./Question"

export default function Game(props){
    const questions = props.data.map(question => <Question key={question.id} question={question} chooseAnswer={props.chooseAnswer} isChecked={props.isChecked} />)
    
    return (
        <div className="main-page">
            {questions}
            {props.isChecked && <p className="score">Your score is : {props.score} /5 </p>}
            <button className="blue-button" onClick={ !props.isChecked ? props.checkAnswers : props.newGame}>
                {props.isChecked ? "New Game" : "Check Answers"}</button>
        </div>
    )
}