import React from "react"

export default function Question(props){

    let answers 
    if(!props.isChecked) {
       answers = props.question.answers.map(answer => 
        { const style = {
            backgroundColor: props.question.selectedAnswer===answer.id ? "#D6DBF5" :"#F5F7FB"
        }
        return <span className="answer-box" style={style} onClick={()=> props.chooseAnswer(props.question.id , answer.id)}>{answer.text}</span>
        })}
        else{
            answers = props.question.answers.map(answer => 
                {  var color="#F5F7FB"
                     if(answer.id === props.question.correctAnswer){
                        color="cyan"
                    
                    }else if(answer.id===props.question.selectedAnswer){
                    color="red"
                }
            
            const style = {
                backgroundColor: color
            }
                return <span className="answer-box" style={style} >{answer.text}</span>
        })}
        
    
    return (
        <div>
            <h1 className="question--title">{props.question.title}</h1>
            <div>{answers}</div>
        </div>
    )
}