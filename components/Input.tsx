import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";


type Props = {
    pre?: IconSource;
    placeholder: string;
    onChangeText?: (text: string) => void;
    postButton?: string;
    onPress?: (text: string) => void;
};

const Input = ({ pre, placeholder, onChangeText, postButton, onPress }: Props) => {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    const [text, setText] = useState<string>("");
    
    return (
        <View style={styles.input}>
            <TextInput left={pre ? <TextInput.Icon icon={pre}/>: ""} style={styles.basic} mode="outlined" placeholder={placeholder} onChangeText={(text) => { setText(text); if (onChangeText) onChangeText(text) }} contentStyle={styles.content} outlineStyle={styles.border} value={text}/>
            { postButton && <Button mode="outlined" rippleColor="transparent" onPress={() => { if (onPress) onPress(text); setText("") }} style={styles.button} labelStyle={styles.buttonLabel}>{postButton}</Button> }
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
            margin: 1,
        },
        content: {
            color: theme.colors.text,
            fontFamily: theme.font.family,
            fontSize: theme.font.size.s3,
            borderRadius: theme.corners.radius,
            borderWidth: 0,
            paddingTop: 3,
            marginLeft: 50,
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
            borderWidth: 2,
            borderColor: theme.colors.accent.from,
            borderRadius: theme.corners.radius,
            backgroundColor: theme.colors.background1,
        },
        buttonLabel: {
            paddingHorizontal: 35,
            fontFamily: theme.font.family,
            fontSize: theme.font.size.s3,
            color: theme.colors.text,
        }
    })
}

export default Input;