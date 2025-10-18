import Preview from "@/components/Preview";
import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { StyleSheet, View } from "react-native";
import OverviewHeader from "../components/OverviewHeader";

export default function Overview() {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <OverviewHeader/>
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
            borderBottomLeftRadius: theme.corners.radius,
            borderBottomRightRadius: theme.corners.radius,
            overflow: "hidden",
        },
        body: {
            marginVertical: "3%",
            marginHorizontal: "3%",
        },
    })
}