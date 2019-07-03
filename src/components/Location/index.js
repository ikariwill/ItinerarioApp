/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container, Name, Street, State,
} from './styles';

const LocationComponent = ({ data, navigation }) => (
  <Container>
    <Name onPress={() => navigation.navigate('Location', { data })}>{data.nome}</Name>
    <Street>
      {data.logradouro}, Nº {data.numero}
    </Street>
    <State>
      {data.cidade} - {data.estado}
    </State>
  </Container>
);

export default LocationComponent;
