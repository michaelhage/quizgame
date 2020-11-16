import React from 'react'

import {NextQuestionBtn} from './GameElements'

function NextQuestion(props){
    // console.log(props.counter, props.max_questions)

    return (
        <div>
            <NextQuestionBtn onClick={props.nextQuestionClick} answerClicked={props.answerClicked}>
                { (props.counter === props.max_questions) ? "Finish Quiz" : "Next Question"}
            </NextQuestionBtn>
        </div>
    )
}

export default NextQuestion
