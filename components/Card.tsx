import * as React from 'react';
import { Cards, Text } from "../styles";

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
