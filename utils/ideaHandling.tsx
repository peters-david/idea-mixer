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
    let i = 5;
    while (directory.exists && i > 0) {
        directory.delete();
        i--;
    }
}

export const getAllIdeaUids = () => {
    return new Directory(APP_DIRECTORY).list().map(e => e.name);
}

export const getAllIdeaUidsSorted = () => {
    const directories = getAllIdeaUids();
    const directoriesWithDates = directories.map(uid => { return { name: uid, date: new File(Paths.join(APP_DIRECTORY, uid, "date.txt")).textSync() }; });
    const sortedDirectories = directoriesWithDates.sort((a, b) => Number(b.date) - Number(a.date)).map(e => e.name);
    return sortedDirectories;
}

export const addConceptsToNewIdea = (uid: string, concepts: string[]) => {
    const file = new File(Paths.join(APP_DIRECTORY, uid, "concepts.csv"));
    file.create();
    file.write(concepts.join(","));
}

export const getAllConcepts = () => {
    const app_directory = new Directory(APP_DIRECTORY);
    if (!app_directory.exists) return [];
    const ideaUids = app_directory.list().filter((e): e is Directory => e instanceof Directory).map(d => d.name);
    const concepts = ideaUids.map(uid => new File(Paths.join(APP_DIRECTORY, uid, "concepts.csv"))).filter(f => f.exists).map(f => f.textSync()).join(",").split(",");
    const filteredConcepts = concepts.filter((concept, index, self) => concept.length > 0 && self.indexOf(concept) === index);
    return filteredConcepts;
}

export const copyImageToLocal = (imagePath: string, ideaUid: string) => {
    const imageUid = uuid4();
    const fileEnding = Paths.extname(imagePath);
    const localImage = imageUid + fileEnding;
    new File(imagePath).copy(new File(Paths.join(APP_DIRECTORY, ideaUid, localImage)));
    return localImage
}