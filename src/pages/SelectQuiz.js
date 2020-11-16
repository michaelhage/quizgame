import React from 'react'

import TimerBar from './GameComponents/TimerBar'
import Game from './GameComponents/Game'
import QuestionCounter from './GameComponents/QuestionCounter'
import NextQuestion from './GameComponents/NextQuestion'

import {GameWrapper} from './GameComponents/GameElements'

class SelectQuiz extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            max_questions: 10,
            answerClicked: false,
            answerId: 1,
            question: "What symphony's last movement includes a setting of Schiller's poem 'Hymn to Joy'?",
            score: 0,
            answersArr: [
                            {
                                answer: "Beethoven's Ninth",
                                id: 1
                            }, 
                            {
                                answer:"Bruckner's Eight",
                                id: 2
                            }, 
                            {
                                answer:"Mahler's Tenth",
                                id: 3
                            }, 
                            {
                                answer:"Mozart's 40th",
                                id: 4
                            }
                        ]
        }

        this.toggleAnswer = this.toggleAnswer.bind(this)
        this.nextQuestionClick = this.nextQuestionClick.bind(this)
    }

    toggleAnswer(id){

        console.log(id)

        if(!this.state.answerClicked){
            
            if(id === this.state.answerId){
                this.setState(prevState => { 
                        return {
                            score: prevState.score + 1,
                        }
                })
            }
            
            this.setState({
                answerClicked: true
            })
        }
    }

    nextQuestionClick(){

        if(this.state.counter < this.state.max_questions){
            
            this.setState(prevState => { 
                return {
                    counter: prevState.counter + 1,
                    answerClicked: false
                }
            });
        }
        else if(this.state.counter === this.state.max_questions){
            this.setState({ 
                    counter: 0,
                    answerClicked: false,
                    score: 0
                
            });
        }
    }

    render(){

        return(
            <div>
                <GameWrapper>
                    <TimerBar />
                    <Game 
                        toggleAnswer={this.toggleAnswer}
                        question={this.state.question}
                        answersArr={this.state.answersArr}
                        answerClicked={this.state.answerClicked}
                    />
                    <QuestionCounter 
                        counter={this.state.counter} 
                        max_questions={this.state.max_questions}
                    />
                    <NextQuestion 
                        answerClicked={this.state.answerClicked} 
                        nextQuestionClick={this.nextQuestionClick}
                        counter={this.state.counter}
                        max_questions={this.state.max_questions}
                    />
                    <h1>Score: {this.state.score}</h1>

                </GameWrapper>
            </div>
        )
    }
}

// function SelectQuiz(){

//     const [answerClicked, setAnswerClicked] = useState(false)
//     const counter = 0;

//     const toggleAC = () => {
//         setAnswerClicked(true)
//     }

//     const nextQuestionClick = () => {
//         setAnswerClicked(false)
//         counter = counter + 1
//     }

//     return (
//         <div>
//             <GameWrapper>
//                 <TimerBar />
//                 <Game toggleAC={toggleAC}/>
//                 <QuestionCounter />
//                 <NextQuestion answerClicked={answerClicked} nextQuestionClick={nextQuestionClick}/>
//             </GameWrapper>
//         </div>
//     )
// }

export default SelectQuiz
