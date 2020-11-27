import styled from 'styled-components'

export const SelectContainer = styled.div`
    /* width: 500px; */
    padding: 50px auto 0;
    text-align: center;
    background-color: whitesmoke;
`;

export const SelectWrapper = styled.div`
    display: block;
    padding-top: 5%;
`

export const SelectDiv = styled.select`
    align-items: center;
    
    width: 80%;
    
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    
    margin-left: 5%;
    margin-right: 5%;
    
    text-align: center;

    font-size: 2rem;

    &:hover{
        box-shadow: 0 0 4px rgb(204, 204, 204);
    }
`

export const OptionDiv = styled.option`

    font-size: 1rem;
    padding-right: 10px;
    text-align: center;

    &:hover{
        box-shadow: 0 0 4px rgb(204, 204, 204);
    }
`

export const SelectText = styled.h1`
    text-align: center;

    font-family: sans-serif;
    font-size: 2rem;
    margin-top: 0px;
    margin-bottom: 0px;
`

export const DropDown = styled.div`
    width: 300px;
    display: inline-block;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 0 2px rgb(204, 204, 204);
    transition: all .5s ease;
    position: relative;
    font-size: 14px;
    color: #474747;
    height: 100%;
    text-align: left;

    &.select{
        cursor: pointer;
        display: block;
        padding: 10px;
    }

    &:hover{
        box-shadow: 0 0 4px rgb(204, 204, 204);
    }

    &:active{
        background-color: #f8f8f8;
    }
`