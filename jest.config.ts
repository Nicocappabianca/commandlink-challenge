module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "\\.(jpg|jpeg|png|gif|svg)$": "jest-file-loader",
  },
};
