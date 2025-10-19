import { APP_DIRECTORY } from "@/constants/app-directory";
import { Paths } from "expo-file-system";
import { useEffect, useState } from "react";
import { useFile } from "./useFile";

export function useIdea(uid: string): [string, (newTitle: string) => void, string[], (concepts: string[]) => void, string, (newContent: string) => void] {
    const [title, setTitle] = useFile(Paths.join(APP_DIRECTORY, uid, "/", "title.txt"));
    const [joinedConcepts, setJoinedConcepts] = useFile(Paths.join(APP_DIRECTORY, uid, "/", "concepts.csv"));
    const [concepts, setConcepts] = useState<string[]>([]);
    const [content, setContent] = useFile(Paths.join(APP_DIRECTORY, uid, "/", "content.txt"));

    useEffect(() => {
        setConcepts(joinedConcepts.split(","));
    }, [joinedConcepts]);

    const updateConcepts = (concepts: string[]) => {
        setJoinedConcepts(concepts.join(","));
    }

    return [title, setTitle, concepts, updateConcepts, content, setContent];
}