import { CustomThemeProvider, useCustomTheme } from "@/theme/custom-theme";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";

const TestComponent = () => {
    const theme = useCustomTheme();

    return (
        <>
            <Text>{theme.colors.text}</Text>
            <Text>{theme.font.family}</Text>
            <Text>{theme.corners.radius}</Text>
        </>
    );
};

describe("useCustomTheme", () => {
    test("provides color, font, and corner radius", () => {
        const { getByText } = render(
            <CustomThemeProvider>
                <TestComponent/>
            </CustomThemeProvider>
        );

        expect(getByText("white")).toBeTruthy();
        expect(getByText("Poppins_200ExtraLight")).toBeTruthy();
        expect(getByText("30")).toBeTruthy();
    });
});