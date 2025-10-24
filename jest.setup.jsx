jest.mock("expo-file-system", () => {
    const directory = jest.fn().mockImplementation((path) => ({
        exists: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
    }));
    const paths = {
        document: "/mock",
        join: jest.fn((...args) => args.join("/"))
    };
    const file = jest.fn().mockImplementation((path) => ({
        create: jest.fn(),
        write: jest.fn(),
        textSync: jest.fn().mockReturnValue("mock"),
        parentDirectory: jest.fn().mockReturnValue(directory),
    }));
    return {
        Directory: directory,
        Paths: paths,
        File: file,
    };
});

jest.mock("expo-router", () => {
    return {
        useFocusEffect: jest.fn(),
        useLocalSearchParams: jest.fn().mockReturnValue({ uid: "mock" }),
    };
});

jest.mock("uuid", () => {
    return {
        v4: jest.fn(),
    };
});

jest.mock("expo-linear-gradient", () => {
    return {
        LinearGradient: jest.fn(),
    };
});

// Linear gradient needs to be default mocked so components are fully rendered in testing 
jest.mock("expo-linear-gradient", () => {
    const React = require("react");
    const { View } = require("react-native");
    const LinearGradient = ({ children, style }) => <View style={style}>{children}</View>;
    return {
        __esModule: true,
        LinearGradient,
    };
});

// NativeModulesProxy is mocked to prevent warnings during testing
jest.mock("expo-modules-core", () => {
    return {
        NativeModulesProxy: {},
        CodedError: class CodedError extends Error {},
    };
});