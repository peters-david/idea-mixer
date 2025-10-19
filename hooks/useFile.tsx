import { File } from "expo-file-system";
import { useCallback, useEffect, useState } from "react";

export function useFile(path: string): [string, (newContent: string) => void] {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        const file = new File(path);
        if (!file.exists) file.create({ intermediates: true });
        const text = file.textSync();
        setContent(text);
    }, []);

    const updateContent = useCallback((text: string) => {
        setContent(text);
        new File(path).write(text);
    }, []);

    return [content, updateContent];
}