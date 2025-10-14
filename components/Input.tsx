import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";


type Props = {
    pre?: IconSource;
    placeholder: string;
    postButton?: string;
};

export default function Input ({ pre, placeholder, postButton }: Props) {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    
    return (
        <View style={styles.input}>
            <TextInput left={pre ? <TextInput.Icon icon={pre}/>: ""} style={styles.basic} mode="outlined" placeholder={placeholder} contentStyle={styles.content} outlineStyle={styles.border}/>
            { postButton && <Button mode="outlined" style={styles.button} labelStyle={styles.buttonLabel}>{postButton}</Button> }
        </View>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        input: {
            width: "100%",
        },
        basic: {
            width: "100%",
            fontSize: 24,
            margin: 1,
        },
        content: {
            color: theme.colors.background2,
            borderRadius: theme.corners.radius,
            borderWidth: 0,
        },
        border: {
            backgroundColor: theme.colors.background1,
            borderColor: theme.colors.accent.from,
            borderWidth: 2,
            borderRadius: theme.corners.radius,
        },
        button: {
            position: "absolute",
            height: "96%",
            right: 0,
            justifyContent: "center",
            paddingHorizontal: 35,
            borderWidth: 2,
            borderColor: theme.colors.accent.from,
            borderRadius: theme.corners.radius,
            marginVertical: 1,
        },
        buttonLabel: {
            fontSize: 24,
            color: theme.colors.text,
            fontWeight: "200",
        }
    })
}