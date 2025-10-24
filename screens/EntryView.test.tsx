import { CustomThemeProvider } from '@/theme/custom-theme';
import { render } from '@testing-library/react-native';
import { PaperProvider } from 'react-native-paper';
import * as hooks from "../hooks/useIdea";
import EntryView from './EntryView';

jest.mock("../hooks/useIdea");
const mockedHook = hooks.useIdea as jest.Mock;

describe("EntryView", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("test empty renders hint", async () => {
        mockedHook.mockReturnValue([
            "",
            jest.fn(),
            [],
            jest.fn(),
            "",
            jest.fn(),
        ]);
        const { findByText } = render(
            <PaperProvider>
                <CustomThemeProvider>
                    <EntryView/>
                </CustomThemeProvider>
            </PaperProvider>
        );

        expect(await findByText("Looks empty. Start adding content by pressing the pencil in the lower right.")).toBeTruthy();
    });

    test("test content is rendered", async () => {
        mockedHook.mockReturnValue([
            "title",
            jest.fn(),
            ["concept"],
            jest.fn(),
            "content",
            jest.fn(),
        ]);
        const { findByText } = render(
            <PaperProvider>
                <CustomThemeProvider>
                    <EntryView/>
                </CustomThemeProvider>
            </PaperProvider>
        );

        expect(await findByText("title")).toBeTruthy();
        expect(await findByText("concept")).toBeTruthy();
        expect(await findByText("content")).toBeTruthy();
    });
});