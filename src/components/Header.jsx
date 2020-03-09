import React from 'react';
import styled from 'styled-components';
import NavbarButton from './NavbarButton';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const Header = () => (
  <Nav>
    <NavHeader>
      <NavLeft>
        <NavbarButton label="Show A" showPanel="SHOW_A" />
        <NavbarButton label="Show B" showPanel="SHOW_B" />
      </NavLeft>
      <NavCenter>Center</NavCenter>
    </NavHeader>
  </Nav>
);

export default Header;
