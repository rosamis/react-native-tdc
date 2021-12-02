import styled from "styled-components/native";

export const Description = styled.Text.attrs({
  numberOfLines: 9,
  ellipsizeMode: "tail",
})`
  padding-vertical: 32px;
  padding-horizontal: 20px;
  font-size: 20px;
  color: #b6b5b5;
`;

export const LikedTimes = styled.Text`
  font-size: 15px;
  font-weight: bold;
  align-self: center;
  color: #747474;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
