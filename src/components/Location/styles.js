import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #6bd4c1;
  text-transform: uppercase;
`;

export const Street = styled.Text`
  font-size: 17px;
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

export const Phone = styled.Text`
  margin-right: 6px;
`;

export const Author = styled.Text`
  margin-top: 15px;
  margin-right: 6px;
`;

export const Stars = styled.Text`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
