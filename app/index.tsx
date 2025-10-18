import { useIdeaIds } from "@/hooks/useIdeaIds";
import Overview from "@/screens/Overview";
import { useEffect } from "react";

export default function Startscreen() {
    const ideaIds = useIdeaIds();

    useEffect(() => {
        console.log(ideaIds);
    }, [ideaIds]);
    
    return (
        <Overview />
    );
}