module.exports = {
  source: [
    '../tokens/base/**/*.json',
    '../tokens/web/**/*.json'
  ],

  platforms: {
    docs: {
      transformGroup: 'js',
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested'
        }
      ]
    }
  }
};
