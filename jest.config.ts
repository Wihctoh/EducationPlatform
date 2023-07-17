import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["mocks.ts"],
  testRegex: "/tests/.*\\.test\\.ts$",
  moduleFileExtensions: ["ts", "js"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};

export default config;
