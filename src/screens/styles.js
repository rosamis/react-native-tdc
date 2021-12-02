import styled from "styled-components/native";

export const Description = styled.Text`
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
  flex-direction: column;
  background-color: #ffffff;
`;

export const DescriptionContainer = styled.View`
  height: 25%;
  justify-content: flex-end;
`;

export const BottomContainer = styled.View`
  flex: 0.2;
  justify-content: flex-end;
  margin-bottom: 15px;
`;