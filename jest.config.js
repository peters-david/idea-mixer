  module.exports = {
    preset: "react-native",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?react-native|@react-native(-community)?|@react-navigation|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-clone-referenced-element)",
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect","<rootDir>/jest.setup.jsx"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/$1",
    },
  };