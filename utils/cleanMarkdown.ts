/**
 * A function to create a preview text out of markdown.
 * This is needed to prevent long links and formatting to be shown as text in the preview.
 * @param markdown - The input text.
 * @returns The cleaned preview text.
 */
export const cleanMarkdown = (markdown: string): string => {
    return markdown.replace(/!\[.*?\]\(.*?\)/g, "[Image]") // replace images
                    .replace(/\[.*?\]\(.*?\)/g, "[Link]") // replace links
                    .replace(/^\s{0,3}>\s?/gm, "") // replace blockquotes
                    .replace(/```[\s\S]*?```/g, "[Code]") // replace Codeblocks
                    .replace(/`([^`]+)`/g, "$1") // replace inline code
                    .replace(/^#{1,6}\s*(.*)$/gm, "$1") // replace headings
                    .replace(/^\s*([-*+]|\d+\.)\s+/gm, "") // replace lists
                    .replace(/(\*{1,2}|_{1,2})(.*?)\1/g, "$2") // replace text stylings
                    .replace(/[>|]/g, "") // replace markers and symbols
                    .replace(/\s+/g, " ").trim(); // trim whitespace
}