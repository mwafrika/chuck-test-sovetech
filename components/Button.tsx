import { useMemo } from "react";
import * as React from 'react';
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { STYLES } from "../styles";

export type Props = {
    onPress: () => void;
    icon: string;
    main: boolean;

}

const Buttons: React.FC<Props> = (({ onPress, icon, main }) => {
    let size = 40;
    const styles = useMemo(() => {
        let styles = [STYLES.button];

        if (main) {
            styles.push(STYLES.buttonMain);
            size = 50;
        }

        return styles;
    }, [main]);

    return (
        <>
            <TouchableOpacity
                style={styles}
                onPress={onPress}>
                <Icon
                    name={icon}
                    size={size}
                    color="#fff"
                />
            </TouchableOpacity>
        </>

    );
})

export default Buttons;