/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container, Name, Comment, Stars,
} from './styles';

const ReviewCompoennt = ({ data }) => (
  <Container>
    <Name>{data.author.name}</Name>
    <Comment>{data.comment}</Comment>
    <Stars>{data.stars} estrelas</Stars>
  </Container>
);

export default ReviewCompoennt;
