import { APP_DIRECTORY } from "@/constants/app-directory";
import { useFile } from "@/hooks/useFile";
import dayjs from "dayjs";
import { Paths } from "expo-file-system";
import { useEffect, useState } from "react";

export const useIdea = (uid: string): [string, (newTitle: string) => void, string[], (concepts: string[]) => void, string, (newContent: string) => void, string] => {
    const [title, setTitle] = useFile(Paths.join(APP_DIRECTORY, uid, "title.txt"));
    const [joinedConcepts, setJoinedConcepts] = useFile(Paths.join(APP_DIRECTORY, uid, "concepts.csv"));
    const [concepts, setConcepts] = useState<string[]>([]);
    const [content, setContent] = useFile(Paths.join(APP_DIRECTORY, uid, "content.md"));
    const [date, setDate] = useFile(Paths.join(APP_DIRECTORY, uid, "date.txt"));

    useEffect(() => {
        let newConcepts = joinedConcepts.split(",");
        if (newConcepts.length === 1 && newConcepts[0].length === 0) newConcepts = [];
        setConcepts(newConcepts);
    }, [joinedConcepts]);

    const updateConcepts = (concepts: string[]) => {
        const cleanedConcepts = concepts.filter(e => e.length > 0).map(e => e.toLowerCase()).join(",");
        setJoinedConcepts(cleanedConcepts);
        setConcepts(concepts);
    }

    useEffect(() => {
        const changeDate = dayjs().format("YYYYMMDDHHmmss");
        setDate(changeDate);
    }, [title, concepts, content]);

    return [title, setTitle, concepts, updateConcepts, content, setContent, date];
}