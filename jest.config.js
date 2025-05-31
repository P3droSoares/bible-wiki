const nextJest = require("next/jest");
const dotenv = require("dotenv");

dotenv.config({
  path: ".env.development",
});

const createJestConfig = nextJest({
  dir: ".",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
