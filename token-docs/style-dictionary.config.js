const StyleDictionary = require('style-dictionary');

module.exports = {
  source: [
    'tokens/base/core.json',
    'tokens/base/semantic.json',
    'tokens/base/component.json',
    'tokens/web/core.json',
    'tokens/web/semantic.json',
    'tokens/web/component.json'
  ],
  platforms: {
    docs: {
      transforms: [], // important: do not transform
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
