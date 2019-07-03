/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import ReviewComponent from '~/components/Review';

import { Container, List, NoComment } from './styles';

export default function Location({ data, navigation }) {
  const [reviews, setReviews] = useState([]);
  const location = navigation.getParam('data');
  useEffect(() => {
    async function loadReviews() {
      const response = await api.get(`/reviews/${location._id}`);

      setReviews(response.data.docs);
    }
    loadReviews();
  }, []);

  if (reviews.length > 0) {
    return (
      <Container>
        <NoComment>{reviews ? '' : 'Sem comentários'}</NoComment>
        <List
          keyboardShouldPersistTaps="handled"
          data={reviews}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <ReviewComponent data={item} />}
        />
      </Container>
    );
  }
  return (
    <Container>
      <NoComment>Sem comentários</NoComment>
    </Container>
  );
}

Location.navigationOptions = {
  title: 'Comentários',
  headerMode: 'none',
};
