import { useIdea } from "@/hooks/useIdea";
import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { deleteIdea } from "@/utils/ideaHandling";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { FAB, Surface } from "react-native-paper";
import Gradient from "../components/Gradient";

export default function EntryEdit() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    const router = useRouter();
    const { uid }: { uid: string } = useLocalSearchParams();
    const [title, setTitle, concepts, setConcepts, content, setContent] = useIdea(uid);

    const updateConcept = (newConcept: string, index: number) => {
        const newConcepts = concepts.map((concept, i) => i === index ? newConcept : concept);
        setConcepts(newConcepts);
    }

    const deleteConcept = (index: number) => {
        const newConcepts = [
            ...concepts.slice(0, index),
            ...concepts.slice(index + 1)
        ];
        setConcepts(newConcepts);
    }

    const addConcept = () => {
        setConcepts([...concepts, ""]);
    }

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Gradient>
                    <TextInput onChangeText={(text) => setTitle(text)} style={styles.title} value={title}></TextInput>
                    <View style={styles.concepts}>
                        {concepts.map((concept, index) => (
                            <Surface key={index} elevation={5} style={styles.concept}>
                                <TextInput key={index} onChangeText={(text) => updateConcept(text, index)} style={styles.conceptText}>{concept}</TextInput>
                                <Pressable onPress={() => deleteConcept(index)}><Image source={require("../assets/images/delete.png")} style={styles.deleteConcept}/></Pressable>
                            </Surface>
                        ))}
                            <Surface elevation={5} style={styles.addConcept}>
                                <Pressable onPress={addConcept}><Image source={require("../assets/images/add.png")} style={styles.addConceptImage}/></Pressable>
                            </Surface>
                    </View>
                </Gradient>
            </View>
            <View style={styles.body}>
                <View style={styles.content}>
                    <TextInput multiline onChangeText={(text) => setContent(text)} style={styles.textEdit}>{content}</TextInput>
                </View>
            </View>
            <FAB icon="check-bold" style={styles.save} onPress={() => router.back()} customSize={80}/>
            <FAB icon="delete" style={styles.delete} onPress={() => { router.push("/"); deleteIdea(uid) }} customSize={80}/>
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
            fontSize: 28,
        },
        concepts: {
            marginHorizontal: "5%",
            marginBottom: "3%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        concept: {
            padding: 4,
            margin: 1,
            borderRadius: theme.corners.radius,
            backgroundColor: theme.colors.background1,
            flexDirection: "row",
            alignItems: "center",
        },
        conceptText: {
            paddingVertical: 7,
            paddingLeft: 13,
            margin: 0,
            fontSize: 20,
            lineHeight: 28,
            fontFamily: theme.font.family,
            color: theme.colors.text,
        },
        deleteConcept: {
            width: 30,
            height: 30,
        },
        addConcept: {
            borderRadius: theme.corners.radius,
            borderColor: theme.colors.positive,
            borderWidth: theme.corners.width,
        },
        addConceptImage: {
            margin: 8,
            width: 20,
            height: 20,
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
            fontFamily: theme.font.family,
            color: theme.colors.text,
            backgroundColor: theme.colors.background1,
            fontSize: 18,
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