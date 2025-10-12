import React, { createContext, useContext, useState } from "react";

const accentFrom = "#6059FE";
const accentTo = "#393598";
const dark0 = "#17171C";
const dark1 = "#26272F";
const red = "#F54B64";
const yellow = "#F7AC61";
const green = "#77884B";
const gray = "rgba(255, 255, 255, 0.15)";

type Color = string;

export type CustomTheme = {
    colors: {
        text: Color,
        negative: Color,
        neutral: Color,
        positive: Color,
        background0: Color,
        background1: Color,
        inactive: Color,
        accent: {
            from: Color,
            to: Color,
        },
    },
}

const theme = {
    colors: {
        text: "white",
        negative: red,
        neutral: yellow,
        positive: green,
        background0: dark0,
        background1: dark1,
        inactive: gray,
        accent: {
            from: accentFrom,
            to: accentTo,
        },
    },
};

const CustomThemeContext = createContext(theme);

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [customTheme, _setCustomTheme] = useState(theme);
    return <CustomThemeContext.Provider value={customTheme}>{children}</CustomThemeContext.Provider>
}

export const useCustomTheme = () => {
    const context = useContext(CustomThemeContext);
    if (!context) throw new Error("useCustomTheme must be used inside CustomThemeProvider");
    return context;
}