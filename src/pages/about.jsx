import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="Peta Jeannie"> A web developer</Header>
    <Container center={center}>
      <p>
        I am a web developer who loves creating a beautiful organized websites.
        Being an expert of program language and the most diligence coder are my
        ambition, gain and share information based on programming. I am
        interested in learning new skills including coding.
      </p>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
