import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import data from './data.json';
import Header from './src/components/Header'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header image={require('./assets/banner-code.jpeg')} title="Trilha Javascript | Node JS" subtitle="O JS ou JavaScript é uma linguagem de programação de alto-nível, criada no meio da década de 90, mais precisamente em 1996 pelo lendário programador Brendan Eich que, além de criar o JavaScript, foi também um dos fundadores da Mozilla Corporation."/>
    </View>
  );
}

