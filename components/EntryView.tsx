import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Chip, FAB, Text } from "react-native-paper";
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
                    <Chip style={styles.concept} textStyle={styles.conceptText} elevation={5}><Text>plants</Text></Chip>
                        <Chip style={styles.concept} textStyle={styles.conceptText} elevation={5}><Text>3d printing</Text></Chip>
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
            <FAB icon="pencil" style={styles.edit} onPress={() => router.push("/edit")} customSize={80}/>
            <FAB icon="delete" style={styles.delete} onPress={() => { console.log('Delete'); router.push("/"); }} customSize={80}/>
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
        edit: {
            position: "absolute",
            margin: 40,
            right: 0,
            bottom: 0,
            backgroundColor: theme.colors.neutral,
        },
        delete: {
            position: "absolute",
            margin: 40,
            right: 100,
            bottom: 0,
            backgroundColor: theme.colors.negative,
        },
    })
}