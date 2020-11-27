import React from 'react'

import {SelectDiv,
        SelectWrapper,
        OptionDiv} from './SelectElements'

function SelectOption(props) {
    
    const addSelectOptions = () =>{
        // console.log(props.components)

        var options = <></>

        // if(Object.keys(props.components).length !== 0){
        if(props.components !== undefined && Object.keys(props.components).length !== 0){

            options = props.components.map((item) =>
            <OptionDiv
                key={item.id}
                id={item.id}
                name={item.name}
            >
                {item.name}
            </OptionDiv>
            )
        } else{
            options = 
                <OptionDiv>
                    Loading...
                </OptionDiv>
        }

        return(
            options
        )
        
    }

    const handleChange = (e) =>{

        props.func(e)
    }

    return (

        <SelectWrapper>
            <SelectDiv onChange={handleChange}>
                {addSelectOptions()}
            </SelectDiv>
        </SelectWrapper>
    )
}

export default SelectOption
