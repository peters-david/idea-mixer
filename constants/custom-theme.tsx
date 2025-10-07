import React, { createContext, useContext, useState } from "react";

const accentFrom = "#6059FE";
const accentTo = "#393598";
const dark0 = "#17171C";
const dark1 = "#26272F";
const red = "#F54B64";
const yellow = "#F7AC61";
const green = "#77884B";

const theme = {
    colors: {
        text: "white",
        negative: red,
        neutral: yellow,
        positive: green,
        background0: dark0,
        background1: dark1,
        accent: {
            from: accentFrom,
            to: accentTo,
        },
    },
};

const CustomThemeContext = createContext(theme);

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [customTheme, setCustomTheme] = useState(theme);
    return <CustomThemeContext.Provider value={customTheme}>{children}</CustomThemeContext.Provider>
}

export const useCustomTheme = () => {
    const context = useContext(CustomThemeContext);
    if (!context) throw new Error("useCustomTheme must be used inside CustomThemeProvider");
    return context;
}