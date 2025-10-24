import { getAllIdeaUids } from "@/utils/ideaHandling";
import { useEffect, useState } from "react";

export function useIdeaIds() {
    const [ideaIds, setIdeaIds] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const ids = getAllIdeaUids();
            setIdeaIds(ids);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return ideaIds;
}