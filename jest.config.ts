import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";
import { compilerOptions } from "./tsconfig.paths.json";

const jestPaths = pathsToModuleNameMapper(compilerOptions.paths);

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  transform: {
    "\\.[jt]s(.x)?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(uuid)/)"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    ...jestPaths,
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
};

export default jestConfig;
