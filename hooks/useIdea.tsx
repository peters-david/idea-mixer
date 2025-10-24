import { APP_DIRECTORY } from "@/constants/app-directory";
import { Paths } from "expo-file-system";
import { useEffect, useState } from "react";
import { useFile } from "./useFile";

export function useIdea(uid: string): [string, (newTitle: string) => void, string[], (concepts: string[]) => void, string, (newContent: string) => void] {
    const [title, setTitle] = useFile(Paths.join(APP_DIRECTORY, uid, "title.txt"));
    const [joinedConcepts, setJoinedConcepts] = useFile(Paths.join(APP_DIRECTORY, uid, "concepts.csv"));
    const [concepts, setConcepts] = useState<string[]>([]);
    const [content, setContent] = useFile(Paths.join(APP_DIRECTORY, uid, "content.txt"));

    useEffect(() => {
        let newConcepts = joinedConcepts.split(",");
        if (newConcepts.length === 1 && newConcepts[0].length === 0) newConcepts = [];
        setConcepts(newConcepts);
    }, [joinedConcepts]);

    const updateConcepts = (concepts: string[]) => {
        const cleanedConcepts = concepts.filter(e => e.length > 0).map(e => e.toLowerCase()).join("");
        setJoinedConcepts(cleanedConcepts);
        setConcepts(concepts);
    }

    return [title, setTitle, concepts, updateConcepts, content, setContent];
}