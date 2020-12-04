import React from 'react'

import {HeroContainer, HeroBtn, HeroItems} from './GeneralPageElements';

import SelectOption from './components/SelectComponents/SelectOption'

import {SelectContainer, SelectText} from './components/SelectComponents/SelectElements'

class SelectQuiz extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            url: "https://opentdb.com/api.php?",

            categories: {},
            categoryString: "",

            amountString: "amount=10",

            diffString: "",
        }

        this.categorySelect = this.categorySelect.bind(this)
        this.amountSelect = this.amountSelect.bind(this)
        this.difficultySelect = this.difficultySelect.bind(this)
        this.getQuizAPI = this.getQuizAPI.bind(this)
    }

    difficultySelect(e){

        var sel = e.target.selectedOptions[0].label
        var string = ""

        if(sel !== "Any Difficulty"){
            string = "&difficulty=" + sel.toLowerCase();
        }

        this.setState({
            diffString: string
        })
    }

    amountSelect(e){
        // console.log(e)

        this.setState({
            amountString: "amount=" + e.target.selectedOptions[0].id
        })
    }

    categorySelect(e){
        // console.log(e.target.selectedOptions[0].id)
        // id = e.target.selectedOptions[0].id

        this.setState({
            categoryString: "&category=" + e.target.selectedOptions[0].id
        })
    }

    async getQuizAPI(){
        const url = "https://opentdb.com/api_category.php";
        const response = await fetch(url);
        const data = await response.json();

        // console.log(this.state.categories);

        this.setState({
            categories: data.trivia_categories
        })

        // console.log(this.state.categories)
    }

    async componentDidMount(){
        this.getQuizAPI()
    }

    render(){

        //MAX QUESTIONS 50
        const MAX_QUESTIONS = 50

        var countArray = []
        for (var i = 0; i < MAX_QUESTIONS; i++){
            countArray.push({
                name: i+1,
                id: i+1
            })
        }

        var diffArray = [
        
            {
                name: "Any Difficulty",
                id: 1
            },
            {
                name: "Easy",
                id: 2
            },
            {
                name: "Medium",
                id: 3
            },
            {
                name: "Hard",
                id: 4
            }
        ];

        // console.log(countArray)
        // console.log(diffArray)

        return (
            <div>
                <HeroContainer>
                    <SelectContainer>
                        <SelectText>
                            Category
                        </SelectText>
                        <SelectOption 
                            components={this.state.categories}
                            func={this.categorySelect}
                        />

                        <SelectText>
                            Amount of Questions
                        </SelectText>
                        <SelectOption 
                            components={countArray}
                            func={this.amountSelect}
                            placeholder={10}
                        />
                        
                        <SelectText>
                            Difficulty
                        </SelectText>
                        <SelectOption 
                            components={diffArray}
                            func={this.difficultySelect}
                        />
                        <HeroBtn 
                            to={{ 
                                pathname: '/play-quiz', 
                                state: { 
                                    url: this.state.url 
                                            + this.state.amountString 
                                            + this.state.categoryString 
                                            + this.state.diffString
                                            + "&encode=url3986"
                                } 
                            }}
                        >Start Quiz
                        </HeroBtn>
                    </SelectContainer>
                </HeroContainer>
            </div>
        )
    }
}

export default SelectQuiz

