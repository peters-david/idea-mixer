import { APP_DIRECTORY, ROOT_DIRECTORY, ROOT_FOLDER_NAME } from "@/constants/app-directory";
import { Paths } from "expo-file-system";

describe("add directory", () => {
    test("ROOT_DIRECTORY is Paths.document", () => {
        expect(ROOT_DIRECTORY).toBe(Paths.document);
    });

    test("ROOT_FOLDER_NAME is data", () => {
        expect(ROOT_FOLDER_NAME).toBe("data");
    });

    test("paths is joined corectly", () => {
        expect(APP_DIRECTORY).toBe("/mock/data");
    });
});