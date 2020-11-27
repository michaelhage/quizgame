import React from 'react'

import {Question, 
        BoxWrapper, 
        Box
        } from './GameElements'

// function strDecode(string){
//     const parser = new DOMParser();
//     const decodedString = parser.parseFromString(`<!doctype html><body>${string}`, 'text/html').body.textContent;
//     // console.log(decodedString);
//     return (decodedString)
// }

function Game(props) {

    // console.log(props)

    const addAnswers = () => {
        const items = props.answersArr.map((ans) =>
            <Box 
                key={ans.id} 
                onClick={ () => props.toggleAnswer(ans.id, ans.answer)}
                selection={props.selectionID}
                id={ans.id}
            >{decodeURIComponent(ans.answer)}</Box>
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
                {decodeURIComponent(props.question)}
            </Question>
            <BoxWrapper>
                {addAnswers()}
            </BoxWrapper>
        </div>
    )
}

export default Game
