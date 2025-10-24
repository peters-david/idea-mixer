import { Directory } from "expo-file-system";
import { ensureFolder } from "./seedData";

describe("ensureFolder", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("test ensure folder does nothing if folder exists", () => {
        const mockCreate = jest.fn();
        (Directory as unknown as jest.Mock).mockImplementation(() => ({
            exists: true,
            create: mockCreate,
        }));

        ensureFolder("path");
        expect(mockCreate).not.toHaveBeenCalled();
    });

    test("test ensure folder is created if not existent", () => {
        const mockCreate = jest.fn();
        (Directory as unknown as jest.Mock).mockImplementation(() => ({
            exists: false,
            create: mockCreate,
        }));

        ensureFolder("path");
        expect(mockCreate).toHaveBeenCalled();
    });
});