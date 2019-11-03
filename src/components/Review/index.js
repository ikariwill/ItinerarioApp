import React from "react";

import { Container, Name, Comment, Stars, Avatar } from "./styles";

const ReviewComponent = ({ data }) => (
  <Container>
    <Avatar />
    <Name>{data.author.name}</Name>
    <Comment>{data.comment}</Comment>
    <Stars>
      {data.stars} {data.stars > 1 ? "estrelas" : "estrela"}
    </Stars>
  </Container>
);

export default ReviewComponent;
