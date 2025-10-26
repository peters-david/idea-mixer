import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { addIdea } from "@/utils/ideaHandling";
import { progressEmoji } from "@/utils/progressEmoji";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Gradient from "./Gradient";
import Input from "./Input";

type Props = {
    entries: number;
    onSearch?: (text: string) => void;
};

export default function OverviewHeader(props: Props) {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const createIdea = (title: string) => {
        if (title.length === 0) return;
        const uid = addIdea(title);
        router.push(`/edit/${uid}`);
    }
    
    return (
        <Gradient>
            <View style={styles.headerContent}>
                <Text style={styles.title}>{props.entries} {props.entries === 1 ? "idea" : "ideas"} collected {progressEmoji(props.entries)}</Text>
                <Input pre={require("../assets/images/search.png")} placeholder="Search ideas" onChangeText={props.onSearch}/>
                <Input pre={require("../assets/images/plus.png")} placeholder="Title" postButton="Add" onPress={createIdea}/>
            </View>
        </Gradient>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        headerContent: {
            marginTop: "15%",
            marginBottom: "3%",
            marginHorizontal: "3%",
        },
        title: {
            alignSelf: "center",
            marginVertical: "5%",
            marginHorizontal: "6%",
            color: theme.colors.text,
            fontFamily: "Poppins_200ExtraLight",
            fontSize: theme.font.size.s2,
        },
    })
}