import { File } from "expo-file-system";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";

export const useFile = (path: string): [string, (newContent: string) => void] => {
    const [content, setContent] = useState<string>("");

    const getContent = () => {
        const file = new File(path);
        if (!file.parentDirectory.exists) return;
        if (!file.exists) file.create({ intermediates: true });
        const text = file.textSync();
        setContent(text);
    }

    useEffect(() => {
        getContent();
    }, []);

    useFocusEffect(() => {
        getContent();
    });

    const updateContent = useCallback((text: string) => {
        setContent(text);
        new File(path).write(text);
    }, []);

    return [content, updateContent];
}