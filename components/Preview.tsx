import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-paper";


type Props = {
};

export default function Preview ({ }: Props) {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    
    return (
        <View style={styles.preview}>
            <View style={styles.previewUpper}>
                <Text style={styles.headline}>This is the title</Text>
                <View style={styles.concepts}>
                    <Chip mode="outlined" style={styles.concept}>Concept 1</Chip>
                    <Chip mode="outlined" style={styles.concept}>Concept 2</Chip>
                </View>
            </View>
            <Text style={styles.previewText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
        </View>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        preview: {
            backgroundColor: theme.colors.background1,
            paddingHorizontal: "5%",
            paddingVertical: "3%",
            borderRadius: 30,
            marginVertical: "1%",
        },
        previewUpper: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        headline: {
            fontSize: 30,
        },
        concepts: {
            flexDirection: "row",
        },
        concept: {
            backgroundColor: theme.colors.background1,
            marginHorizontal: "1%",
        },
        previewText: {
            paddingTop: "1%",
        }
    })
}