// figma-to-ide/src/index.ts
import { fetchFigmaData } from "./figma.service";
import { transformToMCP } from "./figma-to-mcp";

function extractFileId(fileInput: string): string {
  // Normalize "design" URLs to "file" URLs
  const normalized = fileInput.replace("figma.com/design/", "figma.com/file/");
  const match = normalized.match(/file\/([a-zA-Z0-9]+)(\/|$)/);
  return match ? match[1] : fileInput;
}

export async function fetchMCPFromFigma(apiKey: string, fileInput: string) {
  const fileId = extractFileId(fileInput);
  const data = await fetchFigmaData(apiKey, fileId);
  return transformToMCP(data);
}
