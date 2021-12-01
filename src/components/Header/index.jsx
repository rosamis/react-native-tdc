import React from 'react'
import { ImageBackground, Image } from 'react-native'
import { Title, SubTitle, StyledImageBackground } from './styles'

const Header = ({image, title, subtitle = ''}) => {
    
    return (
        <StyledImageBackground source={image} resizeMode="cover">
            <Image source={require('../../../assets/logo.png')} />
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </StyledImageBackground>
    )
}

export default Header;
