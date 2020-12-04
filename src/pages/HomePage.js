import React from 'react'

import {
        HeroContainer,
        HeroContent,
        HeroItems,
        HeroH1,
        HeroP,
        HeroBtn,
        } from './GeneralPageElements';

function HomePage() {
    return (
        <div>
            <HeroContainer>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>
                            QuizGame
                        </HeroH1>
                        <HeroP>
                            Play from over 20 Genres
                        </HeroP>
                        <HeroBtn
                            to={{
                                pathname: "/select-quiz"
                            }}
                        >
                            Click To Play Now
                        </HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </div>
    );
}

export default HomePage
