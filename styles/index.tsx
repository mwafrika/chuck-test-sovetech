
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

// Button style ================================
export const STYLES = StyleSheet.create({
    button: {
        aspectRatio: 1,
        padding: 20,
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: '#20232c',
        elevation: 10,
    },
    buttonMain: {
        padding: 30,
        borderRadius: 60,
        aspectRatio: 1,
        justifyContent: 'center',
        backgroundColor: '#20232c',
        elevation: 10
    },
});

export const SearchScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        margin: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 18,
        color: '#333',
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    empty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyIcon: {
        color: '#fff'
    },
    list: {
        paddingTop: 20,
    },
    search: {
        backgroundColor: '#333',
    }
})

// Cards style ==========================
export const Cards = styled.View`
margin: 20px;
padding: 20px;
background-color: #fff;
border-radius: 10px;
elevation: 4;
`

export const Text = styled.Text`
color: #000;
font-size: 18px;
`;

// Category

export const STYLE = StyleSheet.create({
    icon: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#999',
    },
    selected: {
        color: '#fff',
        backgroundColor: '#aaaaaaaa',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50
    },
});

export const CategoryIcon = styled.View`
    flex: 1;
    align-items: center;
    width: ${width / 5}px;
`;
export const CardContainer = styled.View`
    flex: 1;
    align-items: center;
    `;

// Home screen
export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    categories: {
        flex: 1,
    },
    content: {
        flex: 7,
        justifyContent: 'center',
        padding: 20,
    },
    loading: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        padding: 20,
        color: '#fff',
        fontSize: 20,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
    },
    buttons: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export const CategoryList = styled.View`
    flex: 1;
    padding-top: 50px;
    `;
