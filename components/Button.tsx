import { useMemo } from "react";
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";


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



const STYLES = StyleSheet.create({
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

export default Buttons;