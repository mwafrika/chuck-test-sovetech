import * as React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
export type Props = {
    text: string;
}

const Card = (props: Props) => {
    return (
        <Cards>
            <Text>
                {props.text}
            </Text>
        </Cards>
    );
}

export default Card;

const Cards = styled.view`
margin: 20px;
padding: 20px;
background-color: #fff;
border-radius: 10px;
elevation: 4;
`

const Texts = styled.text`
color: #000;
font-size: 18px;
`;