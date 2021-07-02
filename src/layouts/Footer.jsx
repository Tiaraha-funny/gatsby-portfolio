import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  display: flex;
  justify-content: space-around;
`;

const ContactLink = styled.sapn`
  color: #ffffff;
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <a href="mailto:peta.jea@onja.org">
        <ContactLink>Email me: </ContactLink>
        Email: @petaOnja
      </a>
      <a href="https://github.com/Tiaraha-funny">
        <ContactLink>Github link: </ContactLink>
        Github.com
      </a>
      <a href="https://onja.org/">
        <ContactLink>Onja organization: </ContactLink>
        Onja.org
      </a>
    </Text>
  </Wrapper>
);

export default Footer;
