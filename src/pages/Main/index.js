import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import api from "../../services/api";

import LocationComponent from "../../components/Location";

import { Container, Logo, Form, Input, Submit, List } from "./styles";

import logo from "../../assets/logo.png";

export default function Main({ navigation }) {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadLocations() {
      const response = await api.get("/locations");

      setLocations(response.data.docs);
    }

    loadLocations();
  }, []);

  function handleSearch() {
    setPreviousLocations(locations);

    const searchedLocations = locations.filter(
      location => location.nome.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    setLocations(searchedLocations);
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={true}
          placeholder="Encontre um local"
          textContentType="location"
          returnKeyType="search"
          returnKeyLabel="Buscar"
          onChangeText={text => {
            setSearch(text);
          }}
        />
        <Submit onPress={handleSearch}>
          <Icon name="search" size={26} color="#6bd4c1" />
        </Submit>
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={locations}
        keyExtractor={item => String(item._id)}
        renderItem={({ item }) => (
          <LocationComponent navigation={navigation} data={item} />
        )}
      />
    </Container>
  );
}

Main.navigationOptions = {
  header: null
};
