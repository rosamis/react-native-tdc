import React from "react";
import { Image } from "react-native";
import { Icon } from "react-native-elements";
import {
  Name,
  Title,
  Date,
  Bold,
  Container,
  DataContainer,
  ImageContainer,
  IconContainer,
} from "./styles";

const Item = ({ image, name, title = "", date, time, showIcon = false }) => {
  return (
    <Container>
      <ImageContainer>
        {image.map((item, i) => {
          return <Image
            source={{ uri: item }}
            style={{ flex: 1 }}
            resizeMode="cover"
            key={i}
          />
        })}
      </ImageContainer>
      <DataContainer>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Date>
          <Bold>Data:</Bold> {date}
        </Date>
        <Date>
          <Bold>Horário:</Bold> {time}
        </Date>
      </DataContainer>
      {showIcon ? (
        <IconContainer>
          <Icon name="right" color="#4D4D4D" type="antdesign" />
        </IconContainer>
      ) : null}
    </Container>
  );
};

export default Item;
