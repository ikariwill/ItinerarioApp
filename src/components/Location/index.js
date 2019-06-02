import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Name, Street, Author, Phone, Stars,
} from './styles';

export default function Location({ data }) {
  return (
    <Container>
      <Name>{data.nome}</Name>
      <Street>
        {data.logradouro}, nº {data.numero}, {data.cidade} - {data.estado}
      </Street>

      <Phone>
        <Icon name="phone" size={22} color="#333" /> {data.telefone}
      </Phone>
      <Author>
        <Icon name="face" size={22} color="#333" /> {data.author.name}
      </Author>
      <Stars>
        <Icon name="star" size={22} color="#333" /> 350 avaliações
      </Stars>
    </Container>
  );
}
