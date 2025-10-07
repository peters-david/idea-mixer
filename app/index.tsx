import { useCustomTheme } from "@/constants/custom-theme";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Overview() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    return (
        <View>
            <Text style={styles.title}>Overview</Text>
            <Button mode="contained">Button</Button>
        </View>
    );
}

const makeStyles = (theme: any) => {
    return StyleSheet.create({
        title: {
            color: theme.colors.text,
        },
    })
}