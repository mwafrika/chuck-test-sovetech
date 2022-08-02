import * as React from 'react';
import { FlatList, View } from "react-native";
import Category from "./Category";
import { CATEGORIES } from "../api/constants";


export type Props = {
    main: boolean;
    onSelectCategory: (category: string) => void;
    selected: string;
}
const Categories: React.FC<Props> = ({ onSelectCategory, selected }) => {

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Category
                        id={item.id}
                        icon={item.icon}
                        selected={item.id == selected}
                        onPress={() => onSelectCategory(item.id)} />
                )}
                horizontal={true}
            />
        </View>
    );
}

export default Categories;


