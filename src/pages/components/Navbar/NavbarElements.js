import styled from 'styled-components'
import {NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    /* when link is active */
    &.active {
        color: #15cdfc;
    }

    /* when link is hovered */
    &:hover {
        color: #caa11c;
        transition: all 0.2s ease-in-out;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    color: #fff;

    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    &:hover {
        color: #15cdfc;
        transition: all 0.2s ease-in-out;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
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
    background: ;
    color: #010606;
    }
`;