import React from 'react'
import {SidebarContainer, 
        Icon, 
        CloseIcon,
        SidebarLink,
        SidebarMenu,
        SidebarRoute,
        SideBtnWrap,
        SidebarWrapper} from './SidebarElements'


function Sidebar({isOpen, toggle}){
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu> 
                    <SidebarLink to="/create-quiz" onClick={toggle}>Create Quiz</SidebarLink>
                    <SidebarLink to="/about-us" onClick={toggle}>About Us</SidebarLink>
                    <SidebarLink to="/contact-us" onClick={toggle}>Contact Us</SidebarLink>
                    <SidebarLink to="/whatever" onClick={toggle}>Whatever</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/play-quiz">Play Quiz</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
