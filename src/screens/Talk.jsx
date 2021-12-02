import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import Item from "../components/Item";
import {
  Container,
  Description,
  LikedTimes,
  DescriptionContainer,
  BottomContainer
} from "./styles";

const Talk = ({ route }) => {
  const { title, image, name, description, date, time } = route.params;
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handlePress = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setText(`Você curtiu ${count} vezes`);
  }, [count]);

  return (
    <Container>
      <Header
        image={require("../../assets/banner-cellphone.jpeg")}
        title={title}
      />
      <Item image={image} name={name} date={date} time={time} />
      <DescriptionContainer>
        <ScrollView>
          <Description>{description}</Description>
        </ScrollView>
      </DescriptionContainer>
      <BottomContainer>
        <Button onPress={handlePress} title="Curtir" />
        <LikedTimes>{count ? text : ""}</LikedTimes>
      </BottomContainer>
    </Container>
  );
};

export default Talk;
