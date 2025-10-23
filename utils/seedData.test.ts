jest.mock("expo-file-system", () => {
    return {
        Directory: jest.fn().mockImplementation((path: string) => ({
            exists: jest.fn(),
            create: jest.fn(),
        })),
        Paths: {
            document: "/mock",
            join: jest.fn((...args) => args.join("/"))
        },
    };
});

import { Directory } from "expo-file-system";
import { ensure_folder } from "./seedData";

describe("ensure_folder", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("test ensure folder does nothing if folder exists", () => {
        const mockCreate = jest.fn();
        (Directory as unknown as jest.Mock).mockImplementation(() => ({
            exists: true,
            create: mockCreate,
        }));

        ensure_folder("path");
        expect(mockCreate).not.toHaveBeenCalled();
    });

    test("test ensure folder is created if not existent", () => {
        const mockCreate = jest.fn();
        (Directory as unknown as jest.Mock).mockImplementation(() => ({
            exists: false,
            create: mockCreate,
        }));

        ensure_folder("path");
        expect(mockCreate).toHaveBeenCalled();
    });
});