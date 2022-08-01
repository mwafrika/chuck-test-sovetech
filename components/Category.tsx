import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styled from 'styled-components';

const { width } = Dimensions.get('window');

export type Props = {
    onPress: () => void;
    icon: string;
    selected: boolean;
    id: string;
}

const Category: React.FC<Props> = ({ onPress, icon, selected, id }) => {

    let styles = [STYLES.icon];
    if (selected) {
        styles.push(STYLES.selected);
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <CardContainer>
                <CategoryIcon>
                    <Icon
                        name={icon}
                        style={styles}
                        size={20}
                    />
                </CategoryIcon>
            </CardContainer>
        </TouchableOpacity>

    );
}

export default Category;

const STYLES = StyleSheet.create({
    icon: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#999',
    },
    selected: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        color: '#fff',
        backgroundColor: '#aaaaaaaa',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
});

const CategoryIcon = styled.view`
    flex: 1;
    align-items: center;
    width: ${width / 5}px;
`
const CardContainer = styled.view`
    flex: 1;
    align-items: center;
    `;