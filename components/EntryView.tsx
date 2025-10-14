import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-paper";
import Gradient from "./Gradient";
import MarkdownView from "./MarkdownView";

export default function EntryView() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);


    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Gradient>
                    <Text style={styles.title}>3d printed pots</Text>
                    <View style={styles.concepts}>
                        <Chip style={styles.concept} textStyle={styles.conceptText} elevation={5}>plants</Chip>
                        <Chip style={styles.concept} textStyle={styles.conceptText} elevation={5}>3d printing</Chip>
                    </View>
                </Gradient>
            </View>
            <View>
                {/* pictures: maybe just markdown */}
            </View>
            <View style={styles.body}>
                <View style={styles.content}>
                    <MarkdownView />
                </View>
            </View>
            {/* action buttons */}
        </View>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        background: {
            backgroundColor: theme.colors.background0,
            height: "100%",
        },
        header: {
            borderRadius: theme.corners.radius,
            overflow: "hidden",
            marginHorizontal: "3%",
            marginTop: "12%",
        },
        title: {
            marginHorizontal: "10%",
            marginVertical: "5%",
            fontSize: 28,
        },
        concepts: {
            marginHorizontal: "5%",
            marginBottom: "3%",
            flexDirection: "row",
            justifyContent: "flex-start"
        },
        concept: {
            padding: 8,
            marginHorizontal: 1,
            borderRadius: theme.corners.radius,
        },
        conceptText: {
            fontSize: 20,
            fontWeight: "100",
            color: theme.colors.text,
        },
        body: {
            marginHorizontal: "3%",
            backgroundColor: theme.colors.background1,
            borderRadius: theme.corners.radius,
        },
        content: {
            margin: "10%",
        },
    })
}