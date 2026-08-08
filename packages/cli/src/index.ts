#!/usr/bin/env node

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

switch (command) {
  case "create":
    console.log("→ create command received (not implemented yet)");
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
