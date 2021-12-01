import React from 'react'
import { Image } from 'react-native'
import { Name, Title, Date, Bold, Container, DataContainer, ImageContainer } from './styles'

const Item = ({image, name, title='', date, time}) => {
    return (
        <Container>
            <ImageContainer>
                <Image source={{uri: image}} style={{flex: 1}} resizeMode='contain' />
            </ImageContainer>
            <DataContainer>
                <Name>{name}</Name>
                <Title>{title}</Title>
                <Date><Bold>Data:</Bold> {date}</Date>
                <Date><Bold>Horário:</Bold> {time}</Date>
            </DataContainer>
        </Container>
    )
}

export default Item;
