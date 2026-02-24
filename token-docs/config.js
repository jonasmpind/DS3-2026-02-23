const fs = require('fs');
const path = require('path');
const StyleDictionary = require('style-dictionary');

// Read metadata
const metadataPath = path.resolve(__dirname, '../tokens/$metadata.json');
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

// Convert tokenSetOrder into file paths
const tokenSources = metadata.tokenSetOrder.map(setName =>
  `tokens/${setName}.json`
);

module.exports = {
  source: tokenSources,
  platforms: {
    docs: {
      transformGroup: "js", // IMPORTANT
      buildPath: "token-docs/build/",
      files: [
        {
          destination: "tokens.json",
          format: "json/nested"
        }
      ]
    }
  }
};
