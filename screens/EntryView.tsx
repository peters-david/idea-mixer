import Gradient from "@/components/Gradient";
import MarkdownView from "@/components/MarkdownView";
import { useIdea } from "@/hooks/useIdea";
import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { deleteIdea } from "@/utils/ideaHandling";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { Chip, FAB, Text } from "react-native-paper";

/**
 * The view screen.
 * @returns The component to view an idea.
 */
const EntryView = () => {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    const { uid }: { uid: string } = useLocalSearchParams();
    const [title, _setTitle, concepts, _setConcepts, content, _setContent, _date] = useIdea(uid);


    return (
        <View style={styles.background}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Gradient>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.concepts}>
                            {concepts.map((concept) => (
                                <Chip key={concept} compact style={styles.concept} elevation={5}><Text style={styles.conceptText}>{concept}</Text></Chip>
                            ))}
                        </View>
                    </Gradient>
                </View>
                <View style={styles.body}>
                    <View style={styles.content}>
                        <MarkdownView uid={uid} content={content}/>
                    </View>
                </View>
                {content.length === 0 &&
                    <Text style={styles.hint}>Looks empty. Start adding content by pressing the pencil in the lower right.</Text>
                }
            </ScrollView>
            <FAB icon={require("../assets/images/pencil.png")} color={theme.colors.background1} style={styles.edit} onPress={() => router.push(`/edit/${uid}`)} customSize={theme.font.size.fab}/>
            <FAB icon={require("../assets/images/trash.png")} color={theme.colors.background1} style={styles.delete} onPress={() => { router.push("/?mixIdeas=false"); deleteIdea(uid); }} customSize={theme.font.size.fab}/>
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
            fontFamily: theme.font.family,
            color: theme.colors.text,
            marginHorizontal: "7%",
            marginTop: "5%",
            marginBottom: "2%",
            padding: 0,
            fontSize: theme.font.size.s2,
        },
        concepts: {
            marginHorizontal: "5%",
            marginBottom: "3%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start"
        },
        concept: {
            padding: 4,
            margin: 1,
            borderRadius: theme.corners.radius,
            backgroundColor: theme.colors.background1,
        },
        conceptText: {
            fontSize: theme.font.size.s4,
            lineHeight: theme.font.size.s2,
            fontFamily: theme.font.family,
            color: theme.colors.text,
        },
        body: {
            marginHorizontal: "3%",
            marginBottom: "3%",
            backgroundColor: theme.colors.background1,
            borderRadius: theme.corners.radius,
        },
        content: {
            marginHorizontal: "6%",
            marginTop: "3%",
            marginBottom: "4%",
        },
        hint: {
            margin: "8%",
            fontFamily: theme.font.family,
            color: theme.colors.darkText,
            fontSize: theme.font.size.s3,
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

export default EntryView;