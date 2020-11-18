import React from 'react'

import {NavBtnLink} from './GeneralPageElements';

function SelectQuiz(){
    return (
        <div>
            <NavBtnLink to="/play-quiz" url="something" activeStyle>
                Go play
            </NavBtnLink>
        </div>
    )
}

export default SelectQuiz

