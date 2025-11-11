import { cleanMarkdown } from "@/utils/cleanMarkdown";

describe("cleanMarkdown", () => {
    test("return clean markdown", () => {
        expect(cleanMarkdown("example text")).toBe("example text");
        expect(cleanMarkdown("![Name](Link)")).toBe("[Image]");
        expect(cleanMarkdown("[Name](Link)")).toBe("[Link]");
        expect(cleanMarkdown(">abc")).toBe("abc");
        expect(cleanMarkdown("`code`")).toBe("code");
        expect(cleanMarkdown("# Heading")).toBe("Heading");
        expect(cleanMarkdown("## Heading")).toBe("Heading");
        expect(cleanMarkdown("### Heading")).toBe("Heading");
        expect(cleanMarkdown("- first\n- second")).toBe("first second");
        expect(cleanMarkdown("**bold**")).toBe("bold");
        expect(cleanMarkdown("*italic*")).toBe("italic");
        expect(cleanMarkdown("|")).toBe("");
        expect(cleanMarkdown("   ")).toBe("");
    });
});