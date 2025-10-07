import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Overview() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    return (
        <View>
            <Text style={styles.title}>Overview</Text>
        </View>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        title: {
            color: theme.colors.text,
        },
    })
}