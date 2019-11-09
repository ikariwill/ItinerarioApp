import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0;
  border-radius: 4px;
  margin-bottom: 15px;
  background: #343434;
`;

export const Image = styled.Image`
  width: 100%;
  max-height: 160px;
  border-radius: 4px;
  width: 100%;
  height: 170px;
`;

export const Name = styled.Text`
  padding-left: 15px;
  padding-top: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #6bd4c1;
  text-transform: uppercase;
`;

export const Street = styled.Text`
  padding-left: 15px;
  font-size: 17px;
  color: #fff;
  margin-top: 5px;
  line-height: 20px;
`;

export const State = styled.Text`
  padding-left: 15px;
  font-size: 19px;
  color: #fff;
  margin-top: 5px;
  line-height: 20px;
`;

export const ReviewContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0px;
  background: #343434;
`;

export const LikesCount = styled.Text`
  font-size: 16px;
  margin-right: 10px;
  color: #fff;
`;

export const DislikesCount = styled.Text`
  font-size: 16px;
  margin-right: 10px;
  color: #fff;
`;

export const Likes = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 15px;
  padding: 5px 10px;
  background: #6bd4c1;
  border-radius: 4px;
  margin-top: 5px;
`;

export const Dislikes = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 15px;
  padding: 5px 10px;
  background: #ff4565;
  border-radius: 4px;
  margin-top: 5px;
`;

export const Site = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  color: #fff;
  margin-top: 5px;
  line-height: 20px;
  padding: 5px 10px;
  background: #13a78b;
  border-radius: 4px;
  align-self: flex-start;
`;
