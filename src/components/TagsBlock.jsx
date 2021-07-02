import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 0 1rem 1rem 0;
    color: ${props => props.theme.colors.black.blue};
    padding: 0.3rem 0.6rem;
    background: ${props => props.theme.colors.white.grey};
    border-radius: 10px;
    &:hover {
      color: ${props => props.theme.colors.white.light};
      background: ${props => props.theme.colors.primary.light};
      border: ${props => props.theme.colors.primary.light};
    }
  }
`;

const TagsBlock = ({ list }) => (
  <TagsContainer>
    {list &&
      list.map(tag => {
        let name = 'Design';
        if (tag.includes('github')) {
          name = 'Github';
        }
        if (tag.includes('netlify')) {
          name = 'Demo';
        } else {
          name;
        }
        return <a href={tag}>{name}</a>;
      })}
  </TagsContainer>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};
