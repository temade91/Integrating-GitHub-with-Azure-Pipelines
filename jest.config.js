module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // ensures Babel handles JSX
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // 👈 mock CSS imports
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports/junit",
        outputName: "junit.xml",
      },
    ],
  ],
};

