import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read Tokens Studio metadata
const metadataPath = path.resolve(__dirname, "../tokens/$metadata.json");

if (!fs.existsSync(metadataPath)) {
  throw new Error("Cannot find tokens/$metadata.json");
}

const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

const tokenSources = metadata.tokenSetOrder.map(
  (setName) => `tokens/${setName}.json`
);

console.log("Building from token sets:");
console.log(tokenSources);

export default {
  source: tokenSources,

  // ✅ THIS enables $value / $type (DTCG support)
  usesDtcg: true,

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
