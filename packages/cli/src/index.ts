#!/usr/bin/env node

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const args = process.argv.slice(2);
const command = args[0];

function printHelp(): void {
  console.log(`
A# CLI — build TypeScript-first apps

Usage:
  asharp <command>

Commands:
  create    Scaffold a new A# project
  dev       Start the development server
  build     Create a production build
  preview   Preview the production build

Run "asharp <command> --help" for details on a specific command.
`);
}

async function runCreate(): Promise<void> {
  const rl = readline.createInterface({ input, output });

  const projectName = await rl.question("What's your project named? ");

  rl.close();

  if (!projectName.trim()) {
    console.error("\nProject name cannot be empty.");
    process.exit(1);
  }

  console.log(
    `\n→ Creating project "${projectName.trim()}"... (not implemented yet)`,
  );
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
