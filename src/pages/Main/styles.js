import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  background: #6bd4c1;
  padding-top: ${20 + getStatusBarHeight(true)}px;
`;

export const Logo = styled.Image`
  z-index: 2;
  margin: 20px 20px;
  align-self: center;
  min-width: 211px;
  min-height: 38px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
`;

export const Submit = styled.TouchableOpacity`
  background: #fff;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 16px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticaScrollIndicator: false
})`
  margin-top: 20px;
`;
