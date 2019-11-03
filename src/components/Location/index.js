import React from "react";

import { Container, Name, Street, State, Image, Site } from "./styles";

import { Linking } from "react-native";

const LocationComponent = ({ data, navigation }) => {
  return (
    <Container>
      <Image
        source={{
          uri: data.imagem
        }}
      />
      <Name onPress={() => navigation.navigate("Review", { data })}>
        {data.nome}
      </Name>
      <Street>
        {data.logradouro}, Nº {data.numero}
      </Street>
      <State>
        {data.cidade} - {data.estado}
      </State>
      <Site onPress={() => Linking.openURL(data.link)}>Site Oficial</Site>
    </Container>
  );
};

export default LocationComponent;
