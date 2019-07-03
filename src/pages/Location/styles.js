import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#3D3D3D', '#3D3D3D'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${0 + getStatusBarHeight(true)}px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticaScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const NoComment = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #6bd4c1;
  text-transform: uppercase;
`;
