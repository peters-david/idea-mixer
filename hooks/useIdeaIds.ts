import { getAllIdeaUidsSorted } from "@/utils/ideaHandling";
import { useEffect, useState } from "react";

export const useIdeaIds = () => {
    const [ideaIds, setIdeaIds] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const ids = getAllIdeaUidsSorted();
            setIdeaIds(ids);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return ideaIds;
}