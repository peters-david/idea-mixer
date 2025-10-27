import OverviewHeader from "@/components/OverviewHeader";
import Preview from "@/components/Preview";
import { useIdeaIds } from "@/hooks/useIdeaIds";
import { CustomTheme, useCustomTheme } from "@/theme/custom-theme";
import { useFocusEffect } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Overview = () => {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);

    const scrollRef = useRef<ScrollView>(null);

    const [search, setSearch] = useState<string>();
    const ideaIds = useIdeaIds();

    const onSearch = (text: string) => {
        setSearch(text);
    }

    useFocusEffect(
        useCallback(() => {
            scrollRef.current?.scrollTo({ y: 0, animated: false });
        }, [])
    );

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <OverviewHeader entries={ideaIds.length} onSearch={onSearch}/>
            </View>
            <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    {ideaIds.map((id) => (
                        <Preview key={id} uid={id} showIfContains={search}/>
                    ))}
                </View>
            </ScrollView>
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

export default Overview;