import React from 'react';
import styled, {css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData'
import Button from './Button';

const Nav = styled.nav`
    height: 50px;
    background: #000;
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;
    width: 100%;
    position: sticky;
`

const NavLinks = css`
    display:flex;
    align-items: center;
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    text-decoration: none;
    color: #fff;
`
const Logo = styled(Link)`
    ${NavLinks}
`;

const NavMenuLinks = styled(Link)`
    ${NavLinks}
`;
const MenuBars = styled.i``;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 100px;
`

const Navbar = () => 
    (
    <Nav>
    <Logo to="/">ElectronicsVIew</Logo>
    <MenuBars />
    <NavMenu>
        {MenuData.map((item, index) =>
            (
                <NavMenuLinks to={item.link} key = {index}>
                    {item.title}
                </NavMenuLinks>
                ))}
    </NavMenu>
    <NavBtn>
        <Button to="/contact">Contact Us</Button>
    </NavBtn>
    </Nav>
    )
export default Navbar