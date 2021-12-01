import styled from 'styled-components/native';

export const Name = styled.Text`
    font-size: 17px;
    font-weight: 800;
    color: #4D4D4D;
`

export const Title = styled.Text.attrs({
    numberOfLines: 2,
    ellipsizeMode: 'tail'
})`
    font-size: 15px;
    font-weight: bold;
    padding-vertical: 10px;
    color: #747474;
`

export const Date = styled.Text`
    font-size: 14px;
    color: #B6B5B5;
`

export const Bold = styled.Text`
    font-weight: bold;
    color: #747474;
`

export const Container = styled.View`
    flex-direction: row;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 30px;
`

export const ImageContainer = styled.View`
    flex: 0.3;
`

export const DataContainer = styled.View`
    flex: 0.7;
    padding-left: 10px;
`