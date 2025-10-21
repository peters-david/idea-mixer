import { useIdea } from "@/hooks/useIdea";
import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { cleanMarkdown } from "@/utils/cleanMarkdown";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-paper";

type Props = { 
    uid: string
    showIfContains?: string;
};

export default function Preview (props: Props) {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const [title, _setTitle, concepts, _setConcepts, content, _setContent] = useIdea(props.uid);
    const [preview, setPreview] = useState<string>();

    const contains = (text: string) => {
        const inTitle = title.includes(text);
        const inConcepts = concepts.some(c => c.includes(text));
        const inContent = content.includes(text);
        return inTitle || inConcepts || inContent;
    }

    useEffect(() => {
        const cleanedText = cleanMarkdown(content);
        const previewText = cleanedText.length > 150 ? cleanedText.substring(0, 150) + "…" : cleanedText;
        setPreview(previewText);
    }, [content]);

    if (props.showIfContains && props.showIfContains.length > 0 && !contains(props.showIfContains)) return;
    
    return (
        <Pressable onPress={() => router.push(`/view/${props.uid}`)}>
            <View style={styles.preview}>
                <View style={styles.previewUpper}>
                    <Text style={styles.headline}>{title}</Text>
                    <View style={styles.concepts}>
                        {concepts.map((concept) => (
                                concept.length > 0 && <Chip key={concept} mode="outlined" textStyle={styles.conceptText} style={styles.concept} compact><Text style={styles.conceptInnerText}>{concept}</Text></Chip>
                        ))}
                    </View>
                </View>
                {preview && preview.length > 0 && <Text style={styles.previewText}>{ preview }</Text>}
            </View>
        </Pressable>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        preview: {
            backgroundColor: theme.colors.background1,
            paddingLeft: "5%",
            paddingRight: "1%",
            paddingVertical: "3%",
            borderRadius: theme.corners.radius,
            marginVertical: "1%",
        },
        previewUpper: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        headline: {
            fontFamily: theme.font.family,
            fontSize: 30,
        },
        concepts: {
            flexDirection: "row",
        },
        conceptText: {
            padding: 0,
            margin: 0,
        },
        concept: {
            alignSelf: "flex-start",
            backgroundColor: theme.colors.background1,
            marginHorizontal: "1%",
            padding: 0,
            borderColor: theme.colors.darkText,
            borderRadius: theme.corners.radius,
        },
        conceptInnerText: {
            fontFamily: theme.font.family,
            color: theme.colors.text,
        },
        previewText: {
            paddingTop: "1%",
            fontFamily: theme.font.family,
        }
    })
}