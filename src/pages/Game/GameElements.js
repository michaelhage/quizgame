import styled from 'styled-components'

export const GameWrapper = styled.div`
    display: inline-block;

    background-color: whitesmoke;
    padding-top: 5%;
    /* padding-bottom: 5%; */
`;

export const Question = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
`;

export const BoxWrapper = styled.div`
    padding-top: 5%;
    padding-bottom: 5%;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    border: none;
    outline: none;

    margin-left: 5%;
    margin-right: 5%;

    @media screen and (max-width: 768px) {
        margin-right: 10%;
        margin-left: 10%;
    }
`;

export const Box = styled.div`
    background-color:#333;
    float: left;
    
    width: 40%;

    margin-right: 2.5%;
    margin-left: 2.5%;

    margin-top: 1.25%;
    margin-bottom: 1.25%;

    padding-top: 20px;
    padding-bottom: 20px;

    color: #ccc;
    text-align: center;  
    height: 50%;

    
    font-size: 3vw;
    border-radius:10px;

    transition: all 0.3s ease-in-out;

    &:hover {
    transition: all 0.3s ease-in-out;
    background: #256ce1;
    cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        margin-right: 0;
        margin-left: 0;
        width: 80%;
        font-size: 5vw;
    }
`;

export const Bar = styled.div`
    padding-top: 5%;
    /* margin-top: 10%; */
    margin-left: 10%;
    margin-right: 10%;
    height: 5%;
    background-color: #256ce1;
`

export const NextQuestionBtn = styled.div`

    float: right;
    
    margin-top: 2.5%;
    margin-right: 2.5%;
    
    border-radius: 10px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
    transition: all 0.2s ease-in-out;

    background: #0f0;
    color: #010606;
    }
`