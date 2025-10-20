export const progressEmoji = (n: number) => {
    if (n === 0) return "💤";
    if (n > 0) return "🐢";
    if (n > 1) return "💪";
    if (n > 5) return "🎯";
    if (n > 10) return "🚀";
    if (n > 100) return "🎉";
    if (n > 1000) return "🧠";
}