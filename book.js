module.exports = { "root": "./developer-guide" };
module.exports["plugins"] = [];
module.exports["pluginsConfig"] = {};

module.exports["plugins"].push("codegroup");
module.exports["pluginsConfig"]["codegroup"] = {
  "defaultTabName": "Code",
  "tabNameSeperator": "::",
  "rememberTabs": true
};

// Only add piwik if we're building on the CI and deploying
if (process.env.CI) {
  module.exports["plugins"].push("piwik");
  module.exports["pluginsConfig"] = {
    "piwik": {
      "URL": "matomo.nonpolynomial.com/",
      "siteId": 9
    }
  };
}
