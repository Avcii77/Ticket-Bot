const { resolve } = require("path");

module.exports = {
  TOKEN: "MTIwMzI4OTc0Mjc3NTY4NTIwMA.G5f9EX.jpVrZYiSrO1aWnFsP49EuSq-DgftwNI1aowJ0A",
  LOGS: "1203296415770742867",
  MONGO_DB: "your mongodb uri",

  LANGUAGE: {
    defaultLocale: "en", // "en" = default language
    directory: resolve("Languages"), // <= location of language
  },

  // Options "web" or "local"
  TICKETS_HISTORY: "local",

  //WEBSERVER CONFIG
  PORT: 443,
  FQDM: "my.domain.com",
};
