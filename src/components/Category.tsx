import React from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const { width } = Dimensions.get('window');
const itemWidth = width / 5;
export type Props = {
    onPress: () => void;
    icon: string;
    selected: boolean;
    id: string;
}

const Category: React.FC<Props>= ({ onPress, icon, selected, id }) => {

    let styles = [STYLES.icon];
    if (selected) {
        styles.push(STYLES.selected);
    }

    return (
        // width={itemWidth}
        <View style={STYLES.item}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    name={icon}
                    style={styles}
                    size={20}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Category;

const STYLES = StyleSheet.create({
    item: {
        flex: 1,
        alignItems: 'center'
    },
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
