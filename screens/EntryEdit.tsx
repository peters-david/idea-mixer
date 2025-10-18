import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Chip, FAB, TextInput } from "react-native-paper";
import Gradient from "../components/Gradient";

export default function EntryEdit() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);


    const t = `**Lorem ipsum** dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                [Link](https://google.com)
                ![Pots](https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg)`;

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Gradient>
                    <TextInput mode="outlined" style={styles.title} outlineStyle={styles.titleUnderline} value="3d printed pots"></TextInput>
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
                    <TextInput mode="outlined" multiline style={styles.textEdit} outlineStyle={styles.textEditOutline}>{t}</TextInput>
                </View>
            </View>
            <FAB icon="check-bold" style={styles.save} onPress={() => router.push("/view")} customSize={80}/>
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
            backgroundColor: "transparent",
            marginHorizontal: "10%",
            marginVertical: "5%",
            fontSize: 28,
        },
        titleUnderline: {
            borderColor: "transparent",
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
        textEdit: {
            backgroundColor: theme.colors.background1,
        },
        textEditOutline: {
            borderColor: "transparent",
        },
        save: {
            position: "absolute",
            margin: 40,
            right: 0,
            bottom: 0,
            backgroundColor: theme.colors.positive,
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