const { version } = require("../package.json");
const boba = require("./tokens/boba.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Gin Finance List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/gin-finance/token-icons/main/288/0xe48703F5AdfE59d271D951c2E602F654B86736E7/logo.png",
    keywords: ["gin", "boba", "layer2"],
    tokens: [...boba]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
