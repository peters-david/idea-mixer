import { CustomTheme, useCustomTheme } from "@/constants/custom-theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Gradient ({ children }: { children: React.ReactNode }) {
    const theme = useCustomTheme();
    const styles = makeStyles(theme);
    
    return (
        <LinearGradient style={styles.gradient} colors={[theme.colors.accent.from, theme.colors.accent.to]} start={[0, 0.5]} end={[1, 0.5]}>
            <Image source={require("../assets/images/noise.png")} style={styles.noise}/>
            {children}
        </LinearGradient>
    );
}

const makeStyles = (theme: CustomTheme) => {
    return StyleSheet.create({
        gradient: {
            height: "100%",
            overflow: "hidden",
        },
        noise: {
            width: "100%",
            opacity: 0.4,
            backgroundRepeat: "repeat",
            position: "absolute",
        },
    })
}