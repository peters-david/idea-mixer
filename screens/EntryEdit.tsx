import Gradient from "@/components/Gradient";
import { useIdea } from "@/hooks/useIdea";
import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { copyImageToLocal, deleteIdea } from "@/utils/ideaHandling";
import * as ImagePicker from "expo-image-picker";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, FAB, Icon, Surface } from "react-native-paper";

const EntryEdit = () => {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    const router = useRouter();
    const conceptRefs = useRef<(TextInput | null)[]>([]);
    const { uid }: { uid: string } = useLocalSearchParams();
    const [title, setTitle, concepts, setConcepts, content, setContent, _date] = useIdea(uid);
    const [showMarkdownHint, setShowMarkdownHint] = useState<boolean>(false);

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
        const newLastIndex = concepts.length;
        setConcepts([...concepts, ""]);
        setTimeout(() => {
            conceptRefs.current[newLastIndex]?.focus();
            TextInput.State.currentlyFocusedInput()?.focus();
        }, 100);
    }

    const pickImageAndAddToMarkdown = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images", "videos"],
            quality: 1,
        });
        if (!result.canceled) {
            const localImage = copyImageToLocal(result.assets[0].uri, uid);
            setContent(content + `\n![Image Name](${localImage})`);
        }
    }

    return (
        <View style={styles.background}>
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Gradient>
                        <TextInput onChangeText={(text) => setTitle(text)} style={styles.title} value={title}></TextInput>
                        <View style={styles.concepts}>
                            {concepts.map((concept, index) => (
                                <Surface key={index} elevation={5} style={styles.concept}>
                                    <TextInput key={index} ref={ref => {conceptRefs.current[index] = ref}} onChangeText={(text) => updateConcept(text, index)} style={styles.conceptText}>{concept}</TextInput>
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
                        <TextInput multiline scrollEnabled={false} onChangeText={(text) => setContent(text)} style={styles.textEdit}>{content}</TextInput>
                    </View>
                </View>
                <Button mode="outlined" style={styles.addImage} onPress={async () => await pickImageAndAddToMarkdown()}><Text style={styles.addImageText}>Add image</Text></Button>
                <Pressable onPress={() => setShowMarkdownHint(!showMarkdownHint)}>
                    <View style={styles.markdownHint}>
                        <Icon source={require("../assets/images/info.png")} size={30} color={theme.colors.darkText}/>
                        <Text style={styles.markdownHintTitle}>How to use markdown?</Text>
                    </View>
                        {showMarkdownHint &&
                        <>
                            <Text style={styles.markdownHintText}>
                                Markdown is a popular markup language. It can be used to style text and include links, images and more.
                                Start by wrapping words to make them **bold**, *italic*, ~~strikethrough~~. Make lists with - and add `inline code`.
                                Add links with [Text](http://example.com) and images with ![Text](https://example.com/images/example.png).
                                You can also add local images by using &quot;Add image&quot; above. The local images markdown will be automatically added to the text.
                            </Text>
                            <Link href="https://www.markdownguide.org/getting-started/" style={styles.learnMore}><Text>Learn more</Text></Link>
                        </>
                        }
                </Pressable>
                <View style={{ margin: "30%" }}/>
            </ScrollView>
            <FAB icon={require("../assets/images/checkmark.png")} color={theme.colors.background1} style={styles.save} onPress={() => router.back()} customSize={theme.font.size.fab}/>
            <FAB icon={require("../assets/images/trash.png")} color={theme.colors.background1} style={styles.delete} onPress={() => { router.push("/?mixIdeas=false"); deleteIdea(uid) }} customSize={theme.font.size.fab}/>
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
            fontSize: theme.font.size.s4,
            lineHeight: theme.font.size.s3,
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
            marginHorizontal: "6%",
            marginTop: "3%",
            marginBottom: "4%",
        },
        textEdit: {
            fontFamily: theme.font.family,
            color: theme.colors.text,
            backgroundColor: theme.colors.background1,
            fontSize: theme.font.size.s4,
        },
        textEditOutline: {
            borderColor: "transparent",
        },
        addImage: {
            backgroundColor: "transparent",
            marginHorizontal: "3%",
            borderRadius: theme.corners.radius,
            borderColor: theme.colors.positive,
        },
        addImageText: {
            color: theme.colors.positive,
            fontFamily: theme.font.family,
            lineHeight: theme.font.size.s1,
            fontSize: theme.font.size.s2,
        },
        markdownHint: {
            paddingTop: 50,
            paddingBottom: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        markdownHintTitle: {
            color: theme.colors.darkText,
            fontFamily: theme.font.family,
            fontSize: theme.font.size.s4,
            margin: 10,
        },
        markdownHintText: {
            color: theme.colors.darkText,
            fontFamily: theme.font.family,
            fontSize: theme.font.size.s4,
            paddingHorizontal: "10%",
        },
        learnMore: {
            color: theme.colors.darkText,
            fontFamily: theme.font.family,
            fontSize: theme.font.size.s2,
            paddingHorizontal: "10%",
            textDecorationLine: "underline",
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

export default EntryEdit;