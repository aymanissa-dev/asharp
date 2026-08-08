#!/usr/bin/env node

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import * as fs from "node:fs/promises";
import * as path from "node:path";

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

  console.log(`\n✔ Created folder: ${trimmedName}`);
  console.log(`  ${targetDir}`);
}

async function main(): Promise<void> {
  switch (command) {
    case "create":
      await runCreate();
      break;

    case "dev":
      console.log("→ dev command received (not implemented yet)");
      break;

    case "build":
      console.log("→ build command received (not implemented yet)");
      break;

    case "preview":
      console.log("→ preview command received (not implemented yet)");
      break;

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
