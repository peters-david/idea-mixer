import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function EntryView() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    return (
        <Text>Entry View</Text>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
    })
}