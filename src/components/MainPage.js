import React from "react"

export default function MainPage(props){
    return (
        <div className="main-page">
            <h1 className="title">Quizzical</h1>
            <h4 className="description">Hello, this is a quiz app. You have to answer some questions in order to gain 5/5. Good Luck!</h4>
            <button className="blue-button" onClick={props.startGame}>Start Quiz</button>
        </div>
    )
}