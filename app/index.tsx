import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function Overview() {
    const theme = useTheme();
    const styles = makeStyles(theme);

    return (
        <View>
            <Text style={styles.title}>Overview</Text>
        </View>
    );
}

const makeStyles = (theme: any) => {
    return StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    })
}