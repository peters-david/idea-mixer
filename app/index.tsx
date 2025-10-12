import Gradient from "@/components/Gradient";
import Input from "@/components/Input";
import Preview from "@/components/Preview";
import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Overview() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Gradient>
                    <View style={styles.headerContent}>
                        <Text style={styles.title}>63 Entries</Text>
                        <Input placeholder="Search ideas"/>
                        <Input placeholder="Title"/>
                    </View>
                </Gradient>
            </View>
            <View style={styles.body}>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>
                <Preview/>

            </View>
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
            height: "30%",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            overflow: "hidden",
        },
        headerContent: {
            marginVertical: "15%",
            marginHorizontal: "3%",
        },
        title: {
            marginVertical: "5%",
            marginHorizontal: "8%",
            color: theme.colors.text,
            fontSize: 44,
            fontWeight: "200",
        },
        body: {
            marginVertical: "3%",
            marginHorizontal: "3%",
        },
    })
}