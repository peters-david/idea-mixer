import IdeaMix from "@/components/IdeaMix";
import SeedDownload from "@/components/SeedDownload";
import Overview from "@/screens/Overview";
import { useSearchParams } from "expo-router/build/hooks";
import { View } from "react-native";

/**
 * The start route.
 * @returns The overview screen and a modal depending on the number of saved ideas.
 */
const Startscreen = () => {
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

export default Startscreen;