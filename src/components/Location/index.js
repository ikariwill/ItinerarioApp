import React, { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";

import api from "../../services/api";

import Icon from "@expo/vector-icons/AntDesign";

import {
  Container,
  Name,
  Street,
  State,
  Image,
  ReviewContainer,
  LikesCount,
  DislikesCount,
  Likes,
  Dislikes,
  Site
} from "./styles";

function LocationComponent({ data, navigation }) {
  async function openInAppBrowser(url) {
    await WebBrowser.openBrowserAsync(url, {
      toolbarColor: "#343434",
      showTitle: true,
      controlsColor: "#fff",
      collapseToolbar: true
    });
  }

  async function handleLike(id) {
    await api.post(
      `/locations/${id}/likes`,
      {},
      {
        headers: {
          user: "5cbce31e1b587d18601b9dcd"
        }
      }
    );
  }

  async function handleDislike(id) {
    await api.post(
      `/locations/${id}/dislikes`,
      {},
      {
        headers: {
          user: "5cbce31e1b587d18601b9dcd"
        }
      }
    );
  }

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

      <ReviewContainer>
        <Likes
          onPress={() => {
            handleLike(data._id);
          }}
        >
          <LikesCount>{data.likes.length}</LikesCount>
          <Icon size={20} color="white" name="like2" />
        </Likes>
        <Dislikes
          onPress={() => {
            handleDislike(data._id);
          }}
        >
          <DislikesCount>{data.dislikes.length}</DislikesCount>
          <Icon size={20} color="white" name="dislike2" />
        </Dislikes>
      </ReviewContainer>

      <Site onPress={() => openInAppBrowser(data.link)}>Site Oficial</Site>
    </Container>
  );
}

export default LocationComponent;
