import React, { createContext, useContext, useState } from "react";
import { Dimensions } from "react-native";

const accentFrom = "#6059FE";
const accentTo = "#393598";
const dark0 = "#17171C";
const dark1 = "#26272F";
const dark2 = "#4f5056";
const red = "#F54B64";
const yellow = "#F7AC61";
const green = "#77884B";

const { height } = Dimensions.get("window");
const s1 = height * 0.05;
const s2 = height * 0.03;
const s3 = height * 0.025;
const s4 = height * 0.02;

const fab = height * 0.08;

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
        size: {
            s1: number,
            s2: number,
            s3: number,
            s4: number,
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
        size: {
            s1: s1,
            s2: s2,
            s3: s3,
            s4: s4,
            fab: fab,
        },
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