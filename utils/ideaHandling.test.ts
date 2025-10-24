import { Directory, File } from "expo-file-system";
import { addConceptsToNewIdea, addIdea, deleteIdea } from "./ideaHandling";

describe("addIdea", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("test idea is created", () => {
        const mockCreate = jest.fn();
        const mockWrite = jest.fn();
        (File as unknown as jest.Mock).mockImplementation(() => ({
            create: mockCreate,
            write: mockWrite,
        }));

        const mockTitle = "title;"
        addIdea(mockTitle);
        expect(mockCreate).toHaveBeenCalled();
        expect(mockWrite).toHaveBeenCalledWith(mockTitle);
    });
});

describe("deleteIdea", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("test idea is not deleted if not existent", () => {
        const mockDelete = jest.fn();
        (Directory as unknown as jest.Mock).mockImplementation(() => ({
            exists: false,
            delete: mockDelete,
        }));

        deleteIdea("uid");
        expect(mockDelete).not.toHaveBeenCalled();
    });

    test("test trying to delete idea maximal 5 times", () => {
        const mockDelete = jest.fn();
        (Directory as unknown as jest.Mock).mockImplementation(() => ({
            exists: true,
            delete: mockDelete,
        }));

        deleteIdea("uid");
        expect(mockDelete).toHaveBeenCalledTimes(5);
    });
});

describe("addConceptsToNewIdea", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("test concepts are added to new idea", () => {
        const mockCreate = jest.fn();
        const mockWrite = jest.fn();
        (File as unknown as jest.Mock).mockImplementation(() => ({
            create: mockCreate,
            write: mockWrite,
        }));

        addConceptsToNewIdea("uid", ["a","b","c"]);
        expect(mockCreate).toHaveBeenCalled();
        expect(mockWrite).toHaveBeenCalledWith("a,b,c");
    });
});