import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

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

export default function LocationComponent({ data, navigation }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    setLikes(data.likes.length);
    setDislikes(data.dislikes.length);
  }, []);

  async function openInAppBrowser(url) {
    await WebBrowser.openBrowserAsync(url, {
      toolbarColor: "#343434",
      showTitle: true,
      controlsColor: "#fff",
      collapseToolbar: true
    });
  }

  async function handleLike(id) {
    const userLogged = await AsyncStorage.getItem("user");

    const response = await api.post(
      `/locations/${id}/likes`,
      {},
      {
        headers: {
          user: userLogged
        }
      }
    );

    const { likes: totalLikes } = response.data;
    const { dislikes: totalDislikes } = response.data;

    setLikes(totalLikes.length);
    setDislikes(totalDislikes.length);
  }

  async function handleDislike(id) {
    const userLogged = await AsyncStorage.getItem("user");

    const response = await api.post(
      `/locations/${id}/dislikes`,
      {},
      {
        headers: {
          user: userLogged
        }
      }
    );

    const { dislikes: totalDislikes } = response.data;
    const { likes: totalLikes } = response.data;

    setDislikes(totalDislikes.length);
    setLikes(totalLikes.length);
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
          <LikesCount>{likes}</LikesCount>
          <Icon size={20} color="white" name="like2" />
        </Likes>
        <Dislikes
          onPress={() => {
            handleDislike(data._id);
          }}
        >
          <DislikesCount>{dislikes}</DislikesCount>
          <Icon size={20} color="white" name="dislike2" />
        </Dislikes>
      </ReviewContainer>

      <Site onPress={() => openInAppBrowser(data.link)}>Site Oficial</Site>
    </Container>
  );
}
