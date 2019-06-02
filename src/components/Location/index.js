import React from 'react';

import {
  Container, Name, Street, Stars,
} from './styles';

export default function Location({ data }) {
  return (
    <Container>
      <Name>{data.nome}</Name>
      <Street>
        {data.cidade} - {data.estado}
      </Street>
      <Stars>350 avaliações</Stars>
    </Container>
  );
}
