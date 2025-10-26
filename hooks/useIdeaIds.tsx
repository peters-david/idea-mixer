import { getAllIdeaUidsSorted } from "@/utils/ideaHandling";
import { useEffect, useState } from "react";

export function useIdeaIds() {
    const [ideaIds, setIdeaIds] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const ids = getAllIdeaUidsSorted();
            setIdeaIds(ids);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return ideaIds;
}