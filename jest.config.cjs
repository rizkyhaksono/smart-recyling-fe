require("@babel/preset-react");
require("@babel/preset-env");

module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFiles: ["./jest.setup.js"],
};
