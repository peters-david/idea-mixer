import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { addConceptsToNewIdea, addIdea, getAllConcepts } from "@/utils/ideaHandling";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { Button, Chip, Modal, Portal } from "react-native-paper";
import Gradient from "./Gradient";
import Input from "./Input";

export default function IdeaMix() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    const allConcepts = getAllConcepts();
    const { width, height } = Dimensions.get("screen");

    const [visible, setVisible] = useState(true);
    const [concepts, setConcepts] = useState<string[]>([]);

    const cannonRef = useRef<ConfettiCannon>(null);

    const hide = () => setVisible(false);

    const shuffleConcepts = () => {
        const first = Math.floor(Math.random() * allConcepts.length);
        let second = Math.floor(Math.random() * allConcepts.length);
        if (first === second) {
            second = (first + 5) % (allConcepts.length - 1);
        }
        const firstConcept = allConcepts[first];
        const secondConcept = allConcepts[second];
        setConcepts([firstConcept, secondConcept]);
    }

    const createIdeaWithConcepts = (title: string) => {
        const uid = addIdea(title);
        addConceptsToNewIdea(uid, concepts);
        router.push(`/edit/${uid}`);
        hide();
    }

    useEffect(() => {
        if (allConcepts.length <= 1) hide();
        shuffleConcepts();
        const timer = setTimeout(() => {
            if (visible) cannonRef.current?.start();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Portal>
            {
                visible &&
                <Modal visible={visible} onDismiss={hide} dismissable dismissableBackButton style={styles.modal}>
                    <View style={styles.modalInner}>
                        <View style={styles.content}>
                            <Text style={styles.title}>New idea?</Text>
                            <View style={styles.mix}>
                                <Gradient>
                                    <View style={styles.concepts}>
                                        <Chip compact style={styles.concept} elevation={5}><Text style={styles.conceptText}>{concepts.length > 0 && concepts[0]}</Text></Chip>
                                        <Text style={styles.sign}>+</Text>
                                        <Chip compact style={styles.concept} elevation={5}><Text style={styles.conceptText}>{concepts.length > 0 && concepts[1]}</Text></Chip>
                                    </View>
                                    <View style={styles.create}>
                                        <View style={styles.new}>
                                            <Input pre={require("../assets/images/equals.png")} placeholder="Title" postButton="Add" onPress={createIdeaWithConcepts}/>
                                        </View>
                                    </View>
                                </Gradient>
                            </View>
                            <Text style={styles.different}>Want something different?</Text>
                            <Button mode="outlined" style={styles.shuffle} labelStyle={styles.shuffleLabel} onPress={shuffleConcepts}><Text>Shuffle</Text></Button>
                            <Button mode="outlined" style={styles.discard} labelStyle={styles.discardLabel} onPress={hide}><Text>Not now</Text></Button>
                        </View>
                    </View>
                </Modal>
            }
            <ConfettiCannon autoStart={false} ref={cannonRef} count={150} origin={{ x: width / 2, y: height }} fadeOut fallSpeed={2500}/>
        </Portal>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        modal: {
            transitionDuration: "0ms",
        },
        modalInner: {
            width: "100%",
            height: "110%",
            backgroundColor: theme.colors.background1,
        },
        content: {
            marginTop: "30%",
            justifyContent: "center",
            alignItems: "stretch",
        },
        title: {
            alignSelf: "center",
            fontFamily: theme.font.family,
            fontSize: 50,
            color: theme.colors.text,
            marginBottom: "8%",
        },
        mix: {
            borderRadius: theme.corners.radius,
            overflow: "hidden",
            margin: "3%",
        },
        concepts: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: "3%",
            marginTop: "6%",
            marginBottom: "2%",
        },
        concept: {
            padding: 4,
            margin: 1,
            borderRadius: theme.corners.radius,
            backgroundColor: theme.colors.background1,
        },
        conceptText: {
            fontSize: 20,
            lineHeight: 28,
            fontFamily: theme.font.family,
            color: theme.colors.text,
        },
        sign: {
            fontSize: 50,
            fontFamily: theme.font.bold,
            color: theme.colors.text,
            lineHeight: 50,
        },
        create: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "5%",
        },
        new: {
            width: "100%",
        },
        different: {
            color: theme.colors.text,
            fontSize: 30,
            fontFamily: theme.font.family,
            alignSelf: "center",
            marginTop: 80,
            marginBottom: 20,
        },
        shuffle: {
            alignSelf: "center",
            width: "30%",
            borderRadius: theme.corners.radius,
        },
        shuffleLabel: {
            color: theme.colors.text,
            fontFamily: theme.font.family,
            fontSize: 25,
            lineHeight: 25,
        },
        discard: {
            width: "50%",
            alignSelf: "center",
            margin: 120,
            borderRadius: theme.corners.radius,
            borderWidth: theme.corners.width,
            borderColor: theme.colors.accent.from,
        },
        discardLabel: {
            color: theme.colors.text,
            fontFamily: theme.font.family,
            fontSize: 30,
            lineHeight: 30,
        },
    })
}