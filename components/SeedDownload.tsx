import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { addSeedData } from "@/utils/seedData";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";

export default function SeedDownload() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const [visible, setVisible] = useState(true);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return(
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} dismissable dismissableBackButton style={styles.content} contentContainerStyle={styles.container}>
                <Text style={styles.text}>Do you want to download example data from <Link href="https://github.com/peters-david/idea-mixer-template" style={styles.link}>Github</Link>?</Text>
                <Button onPress={() => {addSeedData(); hideModal()}}><Text style={styles.button}>Add seed data</Text></Button>
                <Button onPress={hideModal}><Text style={styles.button}>Close</Text></Button>
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
        },
        link: {
            textDecorationLine: "underline",
        },
        button:{
            fontSize: 22,
        },
    })
}