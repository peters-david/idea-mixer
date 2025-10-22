import { renderHook } from "@testing-library/react-native";
import { useIdeaIds } from "./useIdeaIds";

jest.mock("expo-file-system"); // TODO: add full mock

test("get idea ids", () => {
    //const { result } = renderHook(() => useIdeaIds());
    //expect(result.current).toBe([]);
});