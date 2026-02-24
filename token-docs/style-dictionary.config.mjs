import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const metadataPath = path.resolve(__dirname, "../tokens/$metadata.json");
const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

const tokenSources = metadata.tokenSetOrder.map(
  (setName) => `tokens/${setName}.json`
);

export default {
  source: tokenSources,

  platforms: {
    docs: {
      buildPath: "token-docs/build/",
      files: [
        {
          destination: "tokens.json",
          format: "json"
        }
      ]
    }
  }
};
