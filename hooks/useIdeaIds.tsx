import { APP_DIRECTORY } from "@/constants/app-directory";
import { Directory } from "expo-file-system";
import { useEffect, useState } from "react";

export function useIdeaIds() {
    const [ideaIds, setIdeaIds] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const ids: string[] = new Directory(APP_DIRECTORY).list().map(e => e.name);
            setIdeaIds(ids);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return ideaIds;
}