import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "gatsby";

const Title = styled.h1`
  margin: auto 0;
`;

const linkStyles = css`
  color: black;
  transition: all 100ms ease-in-out;
  &:hover {
    color: #D65A41;
  }
`

const Nav = styled.div`
display: flex;
justify-content: space-between;
height: 200px;
`;

const NavLinks = styled.ul`
display: flex;
list-style: none;
height: 100%;
align-items: center;
`

const Li = styled.li`
padding: 0 15px;
margin: auto 0;
`

export default () => (
    <Nav>
      <Title><Link to="/" className={linkStyles}>Matt Hagner</Link></Title>
      <NavLinks>
        <Li><Link to="/">Home</Link></Li>
        <Li><Link to="/about">About</Link></Li>
        <Li><Link to="/contact">Contact</Link></Li>
      </NavLinks>
    </Nav>
);
