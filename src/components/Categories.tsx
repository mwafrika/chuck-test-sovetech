import { StyleSheet, FlatList } from "react-native";
import Category from "./Category";
import { CATEGORIES } from "../api/Constants";
import React from 'react';


export type Props = {
    onPress: (category: string) => void;
    main: boolean;
    onSelectCategory: (category: string) => void;
    selected: string;
}
const Categories: React.FC<Props>=({ onSelectCategory, selected }) => {
   
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category
                  id={item.id}
                  icon={item.icon}
                  selected={item.id == selected}
                  onPress={() => onSelectCategory(item.id)}
                />
            )}
            horizontal={true}
        />
    );
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


