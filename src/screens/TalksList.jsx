import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import data from "../../data.json";
import Header from "../components/Header";
import Item from "../components/Item";
import { Container } from "./styles";

const ListTalks = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Talk", {
          title: item.title,
          name: item.name,
          date: item.date,
          time: item.time,
          description: item.description,
          image: item.image,
        });
      }}
    >
      <Item
        image={item.image}
        name={item.name}
        title={item.title}
        date={item.date}
        time={item.time}
        showIcon
      />
    </TouchableOpacity>
  );

  return (
    <Container>
      <Header
        image={require("../../assets/banner-code.jpeg")}
        title="Trilha Javascript | Node JS"
        subtitle="O JS ou JavaScript é uma linguagem de programação de alto-nível, criada no meio da década de 90, mais precisamente em 1996 pelo lendário programador Brendan Eich que, além de criar o JavaScript, foi também um dos fundadores da Mozilla Corporation."
      />
      <FlatList
        style={{ flex: 0.6 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default ListTalks;
