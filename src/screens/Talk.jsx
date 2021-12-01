import React from "react";
import { View, Image } from "react-native";
import Header from "../components/Header";
import { Name, Title, Date, Bold, Container, Description, DataContainer, ImageContainer, IconContainer } from './styles'


const Talk = ({route}) => {
    const {title, image, name, description, date, time} = route.params;
    return(
        <View style={{ flex: 1 }}>
            <Header
                image={require("../../assets/banner-cellphone.jpeg")}
                title={title}
            />
                <ImageContainer>
                    <Image source={{uri: image}} style={{flex: 1}} resizeMode='contain' />
                </ImageContainer>
                <DataContainer>
                    <Name>{name}</Name>
                    <Date><Bold>Data:</Bold> {date}</Date>
                    <Date><Bold>Horário:</Bold> {time}</Date>
                </DataContainer>
                <Description>{description}</Description>
        </View>
 );
}

export default Talk;