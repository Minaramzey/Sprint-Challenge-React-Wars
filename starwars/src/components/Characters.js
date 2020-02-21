import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
padding: 1% 2%;
margin 7px;
text-align: left;
width 15%;
background: rgba(90, 30, 80, 0.5);

`;

const Title = styled.h2`
text-align: center;
margin-bottom: 4px;

`;

const Specs = styled.h4`
font-size: 1.3rem;
`;

export default function Characters({props}) {
return (
    <Card>
    <Title>Name: {props.name}</Title>
    <Specs>Birth Year: {props.birth_year}</Specs>
    <Specs>Eye Color: {props.eye_color}</Specs>
    <Specs>Gender: {props.gender}</Specs>
    <Specs>Hair Color: {props.hair_color}</Specs>
    <Specs>Height: {props.height}</Specs>
    <Specs>Mass: {props.mass}</Specs>
    <Specs>Skin Color: {props.skin_color}</Specs>
    </Card>
)
} 