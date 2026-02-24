import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import StyleDictionary from "style-dictionary";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable DTCG mode
StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ contents }) => JSON.parse(contents)
});

// Read metadata
const metadataPath = path.resolve(__dirname, "../tokens/$metadata.json");
const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

const tokenSources = metadata.tokenSetOrder.map(
  (setName) => `tokens/${setName}.json`
);

export default {
  source: tokenSources,

  // 🔥 THIS IS THE IMPORTANT PART
  hooks: {
    preprocessors: ["dtcg"]
  },

  platforms: {
    docs: {
      transformGroup: "js",
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
