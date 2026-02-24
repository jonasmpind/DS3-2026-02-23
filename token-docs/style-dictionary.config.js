const fs = require('fs');
const path = require('path');

// Path to metadata
const metadataPath = path.resolve(__dirname, '../tokens/$metadata.json');

// Ensure metadata exists
if (!fs.existsSync(metadataPath)) {
  throw new Error('❌ $metadata.json not found in /tokens folder.');
}

// Read metadata
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

// Convert tokenSetOrder into file paths
const tokenSources = metadata.tokenSetOrder.map(setName => {
  const filePath = path.resolve(__dirname, `../tokens/${setName}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`❌ Token file missing: tokens/${setName}.json`);
  }

  console.log(`✅ Including: tokens/${setName}.json`);
  return `tokens/${setName}.json`;
});

module.exports = {
  source: tokenSources,
  platforms: {
    docs: {
      transforms: [], // Preserve $value and aliases
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
