import { Paths } from "expo-file-system";

/**
 * Important file path constants reused across the app.
 */
export const ROOT_DIRECTORY = Paths.document;
export const ROOT_FOLDER_NAME = "data";
export const APP_DIRECTORY: string = Paths.join(ROOT_DIRECTORY, ROOT_FOLDER_NAME);