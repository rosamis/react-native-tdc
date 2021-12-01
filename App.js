import React from "react";
import { View, FlatList } from "react-native";
import data from "./data.json";
import Header from "./src/components/Header";
import Item from "./src/components/Item";

export default function App() {
  const renderItem = ({ item }) => (
    <Item image={item.image} name={item.name} title={item.title} date={item.date} time={item.time} />
  );

  return (
    <View style={{ flex: 1 }}>
      <Header
        image={require("./assets/banner-code.jpeg")}
        title="Trilha Javascript | Node JS"
        subtitle="O JS ou JavaScript é uma linguagem de programação de alto-nível, criada no meio da década de 90, mais precisamente em 1996 pelo lendário programador Brendan Eich que, além de criar o JavaScript, foi também um dos fundadores da Mozilla Corporation."
      />
      <FlatList
        style={{flex: 0.6}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
