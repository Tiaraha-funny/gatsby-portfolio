import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/profile-photo.jpg';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  display: flex;
  font-weight: 700;
  align-items: center;
  position: relative;

  img {
    border-radius: 50%;
    max-width: 100%;
    height: 70px;
    display: none;

    @media (min-width: 1000px) {
      display: block;
    }
  }

  p {
    position: absolute;
    top: 70px;
    left: -20px;
    width: 400px;
    color: white;
    display: none;
    @media (min-width: 1000px) {
      display: block;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;

  @media (min-width: 1000px) {
    justify-content: flex-end;
  }

  a {
    color: ${props => props.theme.colors.white.base};
    margin: 4px;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }

    @media (min-width: 400px) {
      margin: 0.3rem;
    }

    @media (min-width: 1000px) {
      margin-left: 2rem;
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Profile Photo" />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      {/* <Link to="/blog">Projects</Link> */}
      <Link to="/about">About me</Link>
      <a href="https://github.com/Tiaraha-funny">Github</a>
    </Nav>
  </Headroom>
);

export default NavBar;
