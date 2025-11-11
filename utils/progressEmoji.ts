/**
 * Function to calculate to emoji shown in overview header.
 * @param n - The number of collected ideas.
 * @returns The emoji, depending on the number of collected ideas.
 */
export const progressEmoji = (n: number): string => {
    if (n === 0) return "💤";
    if (n <= 1) return "🐢";
    if (n <= 2) return "💪";
    if (n <= 5) return "🎯";
    if (n <= 10) return "🚀";
    if (n <= 100) return "🎉";
    return "🧠";
}