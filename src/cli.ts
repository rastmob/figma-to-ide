#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fetchMCPFromFigma } from "./index";
import fs from "fs";

const argv = yargs(hideBin(process.argv))
  .option("key", {
    alias: "k",
    type: "string",
    demandOption: true,
    description: "Your Figma API key",
  })
  .option("file", {
    alias: "f",
    type: "string",
    demandOption: true,
    description: "Figma File ID",
  })
  .option("visualize", {
    alias: "v",
    type: "boolean",
    description: "Show component tree in terminal",
  })
  .option("output", {
    alias: "o",
    type: "string",
    description: "Save MCP output to a JSON file",
  })
  .help()
  .argv as any;

function printTree(pages: any[]) {
  pages.forEach((page: any) => {
    console.log(`📄 Page: ${page.name ?? "Unnamed Page"}`);
    if (Array.isArray(page.components)) {
      page.components.forEach((comp: any) => {
        printComponent(comp, "├── ");
      });
    } else {
      console.warn(`⚠️  No components found in page: ${page.name}`);
    }
  });
}

function printComponent(comp: any, indent = "") {
  const icon = comp.type === "FRAME" ? "🧩" : "🧱";
  console.log(`${indent}${icon} ${comp.type}: ${comp.name}`);
  comp.children?.forEach((child: any) => {
    printComponent(child, indent + "│   ");
  });
}

(async () => {
  try {
    const mcp = await fetchMCPFromFigma(argv.key, argv.file);

    if (argv.visualize) {
      printTree(mcp.pages || []);
    }

    if (argv.output) {
      fs.writeFileSync(argv.output, JSON.stringify(mcp, null, 2));
      console.log(`✅ Saved MCP to ${argv.output}`);
    } else if (!argv.visualize) {
      console.log(JSON.stringify(mcp, null, 2));
    }
  } catch (error:any) {
    console.error("❌ Error occurred:", error.message || error);
    process.exit(1);
  }
})();
