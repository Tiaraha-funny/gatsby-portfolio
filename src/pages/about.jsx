import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="Peta Jeannie">Front-End Developer</Header>
    <Container center={center}>
      <p>
        I am a web developer who loves creating beautiful, and organized
        websites. I like learning new things and sharing my knowledge with
        others.
      </p>
      <p>
        {' '}
        I was born in Vavatenina which is a small village in the east of
        Madagascar. Onja, a social enterprise in Madagascar that trains
        underprivileged, talented young people to become world-class software
        developers, gave me the opportunity to graduate as a web developer.
      </p>
      <p>
        {' '}
        I am always eager to improve my knowledge about HTML5, CSS/SASS, Vanilla
        JS, React, Typescript and React Native, including some technologies like
        graphQL. Applying these skills in a company that values my skills in
        order to contribute to a meaningful cause and grow along with that
        company are my priorities. I also believe every situation is an
        opportunity to learn and challenge what I have acquired.
      </p>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
