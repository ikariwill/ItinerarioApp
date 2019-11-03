import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  background: #23b97b;
  padding-top: ${15 + getStatusBarHeight(true)}px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticaScrollIndicator: false
})`
  margin-top: 20px;
`;

export const NoComment = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
