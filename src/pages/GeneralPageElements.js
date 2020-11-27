import styled from 'styled-components'

import {NavLink as Link } from 'react-router-dom'

export const Home = styled.div`
    align-items: center;
    /* display: flex; */
    background-color: blue;
    min-height: calc(100vh - 10px);
`;

export const NavBtnLink = styled(Link)`
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    margin-left: 2.5%;
    margin-right: 2.5%;

    border-radius: 4px;
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
    background: #fff;
    color: #010606;
    }
`;