import styled from 'styled-components'
import {NavLink as Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;

    /* make sidebar the top layer */
    z-index: 999;

    /* cover entire screen */
    width: 100%;
    height: 100%;

    background: #0d0d0d;
    
    /*  */
    display: grid;
    align-items: center;
    top: 0;
    left: 0;

    /* create smooth transition between whe it appears and dissappears */
    transition: 0.3s ease-in-out;
    
    /* get sidebar menu when clicking on menu icon */
    /* left teriary is when menu is open */
    /* right teriary is when menu is not open */
    
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #f5f5f5;

    &:hover {
        color: #256ce1;
        transition: 0.2s ease-in-out;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #f5f5f5;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #f5f5f5;
    cursor: pointer;

    &:hover {
        color: #256ce1;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(Link)`
    border-radius: 50px;
    background: #256ce1;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #f5f5f5;
        color: #010606;
    }
`;
