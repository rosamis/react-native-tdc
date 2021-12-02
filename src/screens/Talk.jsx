import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import Header from "../components/Header";
import Item from "../components/Item";
import { Container, Description } from "./styles";

const Talk = ({ route }) => {
  const { title, image, name, description, date, time } = route.params;
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handlePress = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setText(`Você clicou ${count} vezes`);
  }, [count]);

  return (
    <Container>
      <Header
        image={require("../../assets/banner-cellphone.jpeg")}
        title={title}
      />
      <Item image={image} name={name} date={date} time={time} />
      <Description>{description}</Description>
      <Button onPress={handlePress} title="Entrar na Trilha" />
      {count ? <Text>{text}</Text> : null}
    </Container>
  );
};

export default Talk;
