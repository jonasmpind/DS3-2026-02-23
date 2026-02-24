const fs = require('fs');
const path = require('path');

// Read metadata file
const metadata = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../tokens/$metadata.json'), 'utf8')
);

// Convert tokenSetOrder into file paths
const tokenSources = metadata.tokenSetOrder.map(setName => {
  return `tokens/${setName}.json`;
});

module.exports = {
  source: tokenSources,
  platforms: {
    docs: {
      transforms: [],
      buildPath: 'token-docs/build/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested'
        }
      ]
    }
  }
};
