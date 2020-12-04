import React from 'react'

import {ScoreWrapper} from './GameElements';

function Score(props) {
    return (
        <div>
            <ScoreWrapper>
                Score: {props.score}
            </ScoreWrapper>
        </div>
    )
}

export default Score
