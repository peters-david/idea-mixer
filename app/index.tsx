import SeedDownload from "@/components/SeedDownload";
import { useIdeaIds } from "@/hooks/useIdeaIds";
import Overview from "@/screens/Overview";
import { useEffect } from "react";
import { View } from "react-native";

export default function Startscreen() {
    const ideaIds = useIdeaIds();

    useEffect(() => {
        console.log(ideaIds);
    }, [ideaIds]);
    
    return (
        <View>
            <SeedDownload/>
            <Overview />
        </View>
    );
}