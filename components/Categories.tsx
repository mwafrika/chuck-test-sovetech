import * as React from 'react';
import { FlatList, View } from "react-native";
import Category from "./Category";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/actions';


export type Props = {
    main: boolean;
    onSelectCategory: (category: string) => void;
    selected: string;
}
const Categories: React.FC<Props> = ({ onSelectCategory, selected }) => {

    const dispatch = useDispatch();
    const { categories } = useSelector((state: any) => state.joke);

    useEffect(() => {
        dispatch(fetchCategories() as any);
    }, [])

    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            style={{ flex: 1 }}
            renderItem={({ item }) => (
                <Category
                    id={item.id}
                    icon={item.icon}
                    selected={item.id == selected}
                    onPress={() => onSelectCategory(item.id)} />
            )}
            horizontal={true}
        />
    );
}

export default Categories;


