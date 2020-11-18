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
                onClick={ () => props.toggleAnswer(ans.id, ans.answer)}
                selection={props.selectionID}
                id={ans.id}
            >{ans.answer}</Box>
        )
        
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
