import React from 'react'

import {Question, 
        BoxWrapper, 
        Box
        } from './GameElements'

function Game(props) {

    const addAnswers = () => {
        const items = props.answersArr.map((ans) =>
            <Box 
                key={ans.id} 
                onClick={ () => props.answerClicked ? '' : (props.toggleAnswer(ans.id))}
            >{ans.answer}</Box>
        )
        // for (const [index, answer] of answers.entries()){
        //     items.push(<Box key={index} onClick={isClicked(index)} activeStyle>{answer}</Box>)
        // 
        // onClick={ () => click ? (isClicked(ans.id), props.toggleAC()): null }
        // }
        
        return(
            <div>
                {items}
            </div>
        )
    }

    return (
        <div>
            <Question>
                {props.question}
            </Question>
            <BoxWrapper>
                {addAnswers()}
            </BoxWrapper>
        </div>
    )
}

export default Game
