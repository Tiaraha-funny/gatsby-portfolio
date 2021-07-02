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
  }

  p {
    position: absolute;
    top: 70px;
    left: -20px;
    width: 400px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Profile Photo" />
      <p>Peta Jeannie</p>
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <a href="https://github.com/Tiaraha-funny">Github</a>
    </Nav>
  </Headroom>
);

export default NavBar;
