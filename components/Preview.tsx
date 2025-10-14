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
                    <Chip mode="outlined" textStyle={styles.conceptText} style={styles.concept} compact>Concept 1</Chip>
                    <Chip mode="outlined" textStyle={styles.conceptText} style={styles.concept} compact>Concept 2</Chip>
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
            borderRadius: theme.corners.radius,
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
        conceptText: {
            padding: 0,
            margin: 0,
            color: theme.colors.text,
        },
        concept: {
            alignSelf: "flex-start",
            backgroundColor: theme.colors.background1,
            marginHorizontal: "1%",
            padding: 0,
            borderColor: theme.colors.background2,
            borderRadius: theme.corners.radius,
        },
        previewText: {
            paddingTop: "1%",
        }
    })
}