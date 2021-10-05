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

  @media (min-width: 1440px) {
    * {
      margin: auto;
      max-width: 1440px;
    }
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

const ContactLink = styled.span`
  color: #ffffff;
`;

const Link = styled.a``;

const TextLink = styled.span`
  color: #ffffff;
  font-weight: bold;
  :hover {
    text-decoration: underline;
    color: blue;
    font-weight: normal;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <Link href="mailto:peta.jea@onja.org">
        <ContactLink>Contact me: </ContactLink>
        <TextLink>peta@onja.org</TextLink>
      </Link>
    </Text>
  </Wrapper>
);

export default Footer;
