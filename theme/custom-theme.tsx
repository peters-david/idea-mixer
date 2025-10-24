import React, { createContext, useContext, useState } from "react";

const accentFrom = "#6059FE";
const accentTo = "#393598";
const dark0 = "#17171C";
const dark1 = "#26272F";
const dark2 = "#4f5056";
const red = "#F54B64";
const yellow = "#F7AC61";
const green = "#77884B";

type Color = string;

export type CustomTheme = {
    colors: {
        text: Color,
        negative: Color,
        neutral: Color,
        positive: Color,
        background0: Color,
        background1: Color,
        darkText: Color,
        accent: {
            from: Color,
            to: Color,
        },
    },
    corners: {
        radius: number,
        width: number,
    },
    font: {
        family: string,
        bold: string,
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
        darkText: dark2,
        accent: {
            from: accentFrom,
            to: accentTo,
        },
    },
    corners: {
        radius: 30,
        width: 2,
    },
    font: {
        family: "Poppins_200ExtraLight",
        bold: "Poppins_700Bold",
    }
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