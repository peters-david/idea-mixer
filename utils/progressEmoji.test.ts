import { progressEmoji } from "./progressEmoji";

describe("progressEmoji", () => {
    test("return correct emoji", () => {
        expect(progressEmoji(0)).toBe("💤");
        expect(progressEmoji(1)).toBe("🐢");
        expect(progressEmoji(2)).toBe("💪");
        expect(progressEmoji(3)).toBe("🎯");
        expect(progressEmoji(5)).toBe("🎯");
        expect(progressEmoji(6)).toBe("🚀");
        expect(progressEmoji(10)).toBe("🚀");
        expect(progressEmoji(11)).toBe("🎉");
        expect(progressEmoji(100)).toBe("🎉");
        expect(progressEmoji(101)).toBe("🧠");
        expect(progressEmoji(9999)).toBe("🧠");
    });
});