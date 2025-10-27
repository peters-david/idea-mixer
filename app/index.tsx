import IdeaMix from "@/components/IdeaMix";
import SeedDownload from "@/components/SeedDownload";
import Overview from "@/screens/Overview";
import { useSearchParams } from "expo-router/build/hooks";
import { View } from "react-native";

export default function Startscreen() {
    const searchParams = useSearchParams();
    const show = !(searchParams.get("mixIdeas") === "false");
    return (
        <View>
            <SeedDownload/>
            {show && <IdeaMix/>}
            <Overview />
        </View>
    );
}