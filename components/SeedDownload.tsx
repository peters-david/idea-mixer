import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { getAllIdeaUids } from "@/utils/ideaHandling";
import { addSeedData } from "@/utils/seedData";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";

export default function SeedDownload() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    useEffect(() => {
        if (getAllIdeaUids().length == 0) showModal();
    }, []);

    return(
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} dismissable dismissableBackButton style={styles.content} contentContainerStyle={styles.container}>
                <Text style={styles.text}>Do you want to download example data from <Link href="https://github.com/peters-david/idea-mixer-template" style={styles.link}>Github</Link>?</Text>
                <Button mode="outlined" onPress={() => {addSeedData(); hideModal()}} style={styles.button}><Text style={styles.buttonText}>Add seed data</Text></Button>
                <Button mode="outlined" onPress={hideModal} style={styles.button}><Text style={styles.buttonText}>Close</Text></Button>
            </Modal>
        </Portal>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background0,
            padding: "12%",
        },
        content: {
            margin: "5%",
        },
        text: {
            color: theme.colors.text,
            paddingBottom: "20%",
            fontSize: 20,
            fontFamily:theme.font.family,
        },
        link: {
            textDecorationLine: "underline",
        },
        button: {
            margin: 10,
            padding: 5,
            borderRadius: theme.corners.radius,
        },
        buttonText:{
            fontSize: 28,
            fontFamily:theme.font.family,
            color: theme.colors.text,
        },
    })
}