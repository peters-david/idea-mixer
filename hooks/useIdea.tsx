import { APP_DIRECTORY } from "@/constants/app-directory";
import { Paths } from "expo-file-system";
import { useFile } from "./useFile";

export function useIdea(uid: string): [string, (newTitle: string) => void] {
    const [title, setTitle] = useFile(Paths.join(APP_DIRECTORY, uid, "/", "title.txt"));

    return [title, setTitle];
}