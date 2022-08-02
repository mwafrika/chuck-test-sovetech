import * as React from 'react';
import styled from 'styled-components/native';
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

const Cards = styled.View`
margin: 20px;
padding: 20px;
background-color: #fff;
border-radius: 10px;
elevation: 4;
`

const Text = styled.Text`
color: #000;
font-size: 18px;
`;