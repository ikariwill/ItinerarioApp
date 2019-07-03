/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

import LocationComponent from '~/components/Location';

import {
  Container, Title, Form, Input, Submit, List,
} from './styles';

export default function Main({ navigation }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function loadLocations() {
      const response = await api.get('/locations');

      setLocations(response.data.docs);
    }

    loadLocations();
  }, []);

  const handleNavigate = (location) => {
    navigation.navigate('Location', { location });
  };

  return (
    <Container>
      <Title>Itinerário Cotia</Title>
      {/* <Form>
        <Input autoCapitalize="none" autoCorrect={false} placeholder="Encontre um local" />
        <Submit onPress={() => handleNavigate(locations)}>
          <Icon name="search" size={26} color="#FFF" />
        </Submit>
      </Form> */}
      <List
        keyboardShouldPersistTaps="handled"
        data={locations}
        keyExtractor={item => String(item._id)}
        renderItem={({ item }) => <LocationComponent navigation={navigation} data={item} />}
      />
    </Container>
  );
}

Main.navigationOptions = {
  header: null,
};
