import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";


type Props = {
  placeholder: string;
};

export default function Input ({ placeholder }: Props) {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    
    return (
        <TextInput style={styles.basic} mode="outlined" placeholder={placeholder} contentStyle={styles.content} outlineStyle={styles.border}/>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        basic: {
            fontSize: 24,
            margin: 1,
        },
        content: {
            backgroundColor: theme.colors.background1,
            color: theme.colors.inactive,
            borderRadius: 30,
            borderWidth: 2,
            paddingLeft: 26,
            borderColor: theme.colors.accent.from,
        },
        border: {
            borderRadius: 30,
        },
    })
}