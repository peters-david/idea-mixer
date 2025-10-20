import { APP_DIRECTORY } from "@/constants/app-directory";
import { Directory, File, Paths } from "expo-file-system";
import "react-native-get-random-values";
import { v4 as uuid4 } from "uuid";

export const addIdea = (title: string): string => {
    const uid = uuid4();
    new Directory(Paths.join(APP_DIRECTORY, uid)).create();
    const file = new File(Paths.join(APP_DIRECTORY, uid, "title.txt"));
    file.create();
    file.write(title);
    return uid;
}

export const deleteIdea = (uid: string) => {
    const directory = new Directory(Paths.join(APP_DIRECTORY, uid));
    while (directory.exists) {
        directory.delete();
    }
}