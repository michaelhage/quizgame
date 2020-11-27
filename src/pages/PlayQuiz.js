import React from 'react'

import TimerBar from './GameComponents/TimerBar'
import Game from './GameComponents/Game'
import QuestionCounter from './GameComponents/QuestionCounter'
import NextQuestion from './GameComponents/NextQuestion'
import Score from './GameComponents/Score'

import {GameWrapper} from './GameComponents/GameElements';
import {NavBtnLink} from './GeneralPageElements';

class PlayQuiz extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            counter: 1,
            answerClicked: false,
            score: 0,

            selectionID: 0,
            selectionAnswer: "",

            quizDone: false,

            max_questions: 0,
            answer: "",


            url: props.location.state.url,
            // question: ["What symphony's last movement includes a setting of Schiller's poem 'Hymn to Joy'?"],
            // answersArr: [
            //                 {
            //                     answer: "Beethoven's Ninth",
            //                     id: 1
            //                 }, 
            //                 {
            //                     answer:"Bruckner's Eight",
            //                     id: 2
            //                 }, 
            //                 {
            //                     answer:"Mahler's Tenth",
            //                     id: 3
            //                 }, 
            //                 {
            //                     answer:"Mozart's 40th",
            //                     id: 4
            //                 }
            //             ],
            items: [],
            question: [],
            answersArr: [],
            }

        this.toggleAnswer = this.toggleAnswer.bind(this)
        this.nextQuestionClick = this.nextQuestionClick.bind(this)
        this.startGame = this.startGame.bind(this)
        this.scoreScreen = this.scoreScreen.bind(this)
        this.createAnsArr = this.createAnsArr.bind(this)
        this.shuffle = this.shuffle.bind(this)
    }

    async componentDidMount(){
            
        // const url = "https://opentdb.com/api.php?amount=10&category=19&difficulty=hard";
        const response = await fetch(this.state.url);
        const data = await response.json();
        // console.log(data);

        var tempArr = []

        tempArr = this.createAnsArr(data.results[0])

        // tempArr = this.shuffle([...a])

        this.setState({
            items: data.results,
            max_questions: Object.keys(data.results).length,
            question: data.results[0].question,
            answer: data.results[0].correct_answer,
            answersArr: tempArr,
        })
    }

    toggleAnswer(id, selAns){

        // console.log(id)
        this.setState({
            answerClicked: true,
            selectionID: id,
            selectionAnswer: selAns
        })

        
    }

    createAnsArr(data){

        // console.log(Array.from(Array(data.incorrect_answers.length + 1).keys()))

        const tempArr = []
        var i = 1
        
        for (const item of data.incorrect_answers){
            tempArr.push({
                answer: item,
                id: i++,
            })
        }
        tempArr.push({
            answer: data.correct_answer,
            id: data.incorrect_answers.length + 1
        })

        // for(i = 0)

        return(this.shuffle([...tempArr]))
    }

    /**
     * Shuffles array in place.
    */
    shuffle(a){
        // console.log("shuffle")
        // console.log(a)

        var j, x, i;
        for(i = a.length - 1; i > 0; i--){
            j = Math.floor(Math.random() * (i + 1));
            x = a[i]
            a[i] = a[j]
            a[j] = x;
        }

        return a
    }

    nextQuestionClick(){

        if(this.state.counter < this.state.max_questions){

            const a = this.createAnsArr(this.state.items[this.state.counter])

            const tempArr = this.shuffle([...a])

            // if the answer is correct
            if(this.state.selectionAnswer === this.state.answer){
                this.setState(prevState => { 
                        return {
                            // update score
                            score: prevState.score + 1,

                            // update counter
                            counter: prevState.counter + 1,
                            
                            // reset game conditions
                            answerClicked: false,
                            selectionID: 0,
                            selectionAnswer: "",

                            // next set of Q/A
                            question: this.state.items[prevState.counter].question,
                            answer:  this.state.items[prevState.counter].correct_answer,
                            answersArr: tempArr,
                        }
                });
            } else {
                this.setState(prevState => { 
                    return {
                        // update counter
                        counter: prevState.counter + 1,

                        // reset game conditions
                        answerClicked: false,
                        selectionID: 0,
                        selectionAnswer: "",

                        // next set of Q/A
                        question: this.state.items[prevState.counter].question,
                        answer:  this.state.items[prevState.counter].correct_answer,
                        answersArr: tempArr,
                    }
                });
            }
        }
        else if(this.state.counter === this.state.max_questions){
            if(this.state.selectionAnswer === this.state.answer){
                this.setState(prevState => { 
                    return {
                        // update score
                        score: prevState.score + 1,
                        counter: 0,
                        answerClicked: false,
                        quizDone: true,
                        selectionID: 0,
                        selectionAnswer: "",
                    }
            });
            } else{
                this.setState({ 
                    counter: 0,
                    answerClicked: false,
                    quizDone: true,
                    selectionID: 0,
                    selectionAnswer: "",
                });
            }
            
        }
    }

    startGame(){
        return(
            <div>
                <GameWrapper>
                    <TimerBar />
                    <Game 
                        toggleAnswer={this.toggleAnswer}
                        question={this.state.question}
                        answersArr={this.state.answersArr}
                        answerClicked={this.state.answerClicked}
                        selectionID={this.state.selectionID}
                    />
                    <QuestionCounter 
                        counter={this.state.counter} 
                        max_questions={this.state.max_questions}
                    />
                    <Score 
                        score={this.state.score} 
                    />
                    <NextQuestion 
                        answerClicked={this.state.answerClicked} 
                        nextQuestionClick={this.nextQuestionClick}
                        counter={this.state.counter}
                        max_questions={this.state.max_questions}
                    />

                </GameWrapper>
            </div>
        )
    }

    scoreScreen(){
        return(
            <div>
                <GameWrapper>
                    <h1>Score: {this.state.score}</h1>
                    <NavBtnLink to="/select-quiz" activeStyle>
                        Return to Select Screen
                    </NavBtnLink>
                </GameWrapper>
            </div>
        )
    }

    render(){

        var display = <></>

        if(this.state.quizDone){
            display = this.scoreScreen()
        }
        else{
            display = this.startGame()
        }

        return(
            display
        )
    }
}

export default PlayQuiz