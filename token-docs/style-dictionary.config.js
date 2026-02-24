module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    docs: {
      transformGroup: 'js',
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
