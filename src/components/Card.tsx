import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export type Props ={
    text: string;
}

export const FactCard = (props: Props) => {
    return (
        <View style={STYLES.card}>
            <Text style={STYLES.text}>
                {props.text}
            </Text>
        </View>
    );
}


const STYLES = StyleSheet.create({
    card: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4,
    },
    text: {
        color: '#000',
        fontSize: 18,
    },
});