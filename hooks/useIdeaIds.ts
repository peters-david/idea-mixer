import { getAllIdeaUidsSorted } from "@/utils/ideaHandling";
import { useEffect, useState } from "react";

/**
 * The useIdeaIds hook.
 * @returns Convenience functions to get and set all ids of ideas from the filesystem.
 */
export const useIdeaIds = (): string[] => {
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