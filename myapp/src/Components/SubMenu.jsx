import React from 'react'
// import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 40px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background-color: #252831 ;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;
const SidebarLabel = styled.span`
    margin-left: 16px;
`;
const DropdownLink = styled(Link)`
    background-color: #414757;
    height: 50px;
    padding-left: 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 17px;
    
    &:hover{
        background-color: #632ce4;
        cursor: pointer;
    }
`;


const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon} 
                        <SidebarLabel>{item.title}</SidebarLabel>   
                    </DropdownLink>
                )
            })}   
        </>
    )
}
export default SubMenu;