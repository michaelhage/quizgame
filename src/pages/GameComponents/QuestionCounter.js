import React from 'react'

import {QuestionProgress} from './GameElements'

function QuestionCounter({counter, max_questions}){
    return (
        <div>
            <QuestionProgress>
                Question: {counter}/{max_questions}
            </QuestionProgress>
        </div>
    )
}

export default QuestionCounter
