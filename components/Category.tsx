import * as React from 'react';
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { STYLE, CardContainer, CategoryIcon } from "../styles";

export type Props = {
    onPress: () => void;
    icon: string;
    selected: boolean;
    id: string;
}

const Category: React.FC<Props> = ({ onPress, icon, selected }) => {
    let styles = [STYLE.icon];
    if (selected) {
        styles.push(STYLE.selected);
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