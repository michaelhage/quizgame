import React from 'react'

import {GameWrapper, 
        Question, 
        BoxWrapper, 
        Box,
        Bar,
        NextQuestionBtn
        } from './GameElements'

function Game() {
    return (
        <div>
            <GameWrapper>
                <Bar />
                <Question>
                    What symphony's last movement includes a setting of Schiller's poem "Hymn to Joy"?
                </Question>
                <BoxWrapper>
                    <Box>
                        Beethoven's Ninth
                    </Box>
                    <Box>
                        Bruckner's Eight
                    </Box>
                    <Box>
                        Mahler's Tenth
                    </Box>
                    <Box>
                        Mozart's 40th
                    </Box>
                </BoxWrapper>
                <NextQuestionBtn>
                    Next Question
                </NextQuestionBtn>
            </GameWrapper>
        </div>
    )
}

export default Game
