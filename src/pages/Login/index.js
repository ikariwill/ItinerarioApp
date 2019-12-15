import React, { useState, useEffect } from "react";
import {
  View,
  AsyncStorage,
  KeyboardAvoidingView,
  Image,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

import api from "../../services/api";

import logo from "../../assets/logo.png";

import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function isLogged() {
      if (await AsyncStorage.getItem("user")) {
        navigation.navigate("Main");
      }
    }

    isLogged();
  }, []);

  async function handleSubmit() {
    const response = await api.post("/users", {
      email
    });

    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);

    navigation.navigate("Main");
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
