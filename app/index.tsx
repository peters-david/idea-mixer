import IdeaMix from "@/components/IdeaMix";
import SeedDownload from "@/components/SeedDownload";
import Overview from "@/screens/Overview";
import { View } from "react-native";

export default function Startscreen() {
    return (
        <View>
            <SeedDownload/>
            <IdeaMix/>
            <Overview />
        </View>
    );
}