import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
padding: 10px;
color: white;
`;

const NavList = styled.ul`
list-style: none;
display: flex;
@media (max-width: 768px) {
  flex-direction: column;
  display: ${({ open }) => (open ? 'block' : 'none')};
}
`;

const NavItem = styled.li`
margin: 0 10px;
font-weight: bold;
@media (max-width: 768px) {
  margin: 10px 0;
}
`;

const NavLinkStyled = styled(NavLink)`
text-decoration: none;
color: #61dbfb;
&:hover {
  color: white;
}
&.active {
  color: white;
}
`;

const MenuText = styled.div`
display: none;
cursor: pointer;
@media (max-width: 768px) {
  display: block;
  font-size: 1.2em;
  font-weight: bold;
}
`;


const Navbar = ({ continents }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };


  return (
    <NavWrapper>
      <MenuText onClick={toggleMenu}>Menu</MenuText>
      <NavList open={open}>
        <NavItem>
          <NavLinkStyled to="/">
            Global
          </NavLinkStyled>
        </NavItem>
        {continents.map((continent) => (
          <NavItem key={continent}>
            <NavLinkStyled to={`/${continent}`}>
              {continent}
            </NavLinkStyled>
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  );
};

export default Navbar;