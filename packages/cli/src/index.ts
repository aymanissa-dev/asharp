#!/usr/bin/env node

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { createApplication } from "@asharp/core";

const args = process.argv.slice(2);
const command = args[0];

function printHelp(): void {
  console.log(`
A# CLI — build TypeScript-first apps

Usage:
  asharp <command>

Commands:
  create [name]   Scaffold a new A# project (prompts if name omitted)
  dev             Start the development server
  build           Create a production build
  preview         Preview the production build

Run "asharp <command> --help" for details on a specific command.
`);
}

function getTemplateFiles(projectName: string): Record<string, string> {
  return {
    "package.json": JSON.stringify(
      {
        name: projectName,
        version: "0.0.1",
        private: true,
        type: "module",
        scripts: {
          build: "tsc",
          start: "node dist/index.js",
        },
        devDependencies: {
          typescript: "^7.0.2",
          "@types/node": "^24.0.0",
        },
      },
      null,
      2,
    ),

    "tsconfig.json": JSON.stringify(
      {
        compilerOptions: {
          target: "ES2022",
          module: "ESNext",
          moduleResolution: "Bundler",
          outDir: "dist",
          rootDir: "src",
          strict: true,
          declaration: true,
          esModuleInterop: true,
          skipLibCheck: true,
          types: ["node"],
        },
        include: ["src"],
      },
      null,
      2,
    ),

    "src/index.ts": `// This is a placeholder starter file.
// A#'s component model, routing, and framework core are not yet
// implemented — see ROADMAP.md in the A# repository for progress.

console.log("Hello from ${projectName} — an A# project (placeholder).");
`,
  };
}

async function writeTemplateFiles(
  targetDir: string,
  projectName: string,
): Promise<void> {
  const files = getTemplateFiles(projectName);

  for (const [relativePath, content] of Object.entries(files)) {
    const fullPath = path.join(targetDir, relativePath);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, content, "utf-8");
  }
}

async function runCreate(): Promise<void> {
  let projectName = args[1];

  if (!projectName) {
    const rl = readline.createInterface({ input, output });
    projectName = await rl.question("What's your project named? ");
    rl.close();
  }

  const trimmedName = projectName.trim();

  if (!trimmedName) {
    console.error("\nProject name cannot be empty.");
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), trimmedName);

  const alreadyExists = await fs
    .access(targetDir)
    .then(() => true)
    .catch(() => false);

  if (alreadyExists) {
    console.error(`\nA folder named "${trimmedName}" already exists here.`);
    console.error("Choose a different name or remove the existing folder.");
    process.exit(1);
  }

  await fs.mkdir(targetDir);
  await writeTemplateFiles(targetDir, trimmedName);

  console.log(`\n✔ Created project: ${trimmedName}`);
  console.log(`  ${targetDir}`);
  console.log(`\nNext steps:`);
  console.log(`  cd ${trimmedName}`);
  console.log(`  npm install`);
  console.log(`  npm run build && npm start`);
}

async function main(): Promise<void> {
  switch (command) {
    case "create":
      await runCreate();
      break;

    case "dev": {
      const app = createApplication({ name: "A# Dev Server" });
      app.start();
      console.log("(Real dev server behavior not implemented yet.)");
      break;
    }

    case "build": {
      const app = createApplication({ name: "A# Build" });
      console.log(`[A#] Preparing to build application: "${app.config.name}"`);
      console.log("(Real build output not implemented yet.)");
      break;
    }

    case "preview": {
      const app = createApplication({ name: "A# Preview" });
      console.log(
        `[A#] Preparing to preview application: "${app.config.name}"`,
      );
      console.log("(Real preview server not implemented yet.)");
      break;
    }

    case undefined:
    case "--help":
    case "-h":
      printHelp();
      break;

    default:
      console.error(`Unknown command: "${command}"\n`);
      printHelp();
      process.exit(1);
  }
}

main();
