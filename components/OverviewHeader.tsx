import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Gradient from "./Gradient";
import Input from "./Input";

export default function OverviewHeader() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    return (
        <Gradient>
            <View style={styles.headerContent}>
                <Text style={styles.title}>Your currently have 6 entries</Text>
                <Input pre={require("../assets/images/search.png")} placeholder="Search ideas"/>
                <Input pre={require("../assets/images/plus.png")} placeholder="Title" postButton="Add"/>
            </View>
        </Gradient>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        headerContent: {
            marginVertical: "15%",
            marginHorizontal: "3%",
        },
        title: {
            marginVertical: "5%",
            marginHorizontal: "8%",
            color: theme.colors.text,
            fontSize: 34,
            fontWeight: "200",
        },
    })
}