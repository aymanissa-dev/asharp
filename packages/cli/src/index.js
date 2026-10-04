#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

function printHelp() {
  console.log(`
A# CLI — the structured web framework

Usage:
  asharp <command>

Commands:
  create [name]   Scaffold a new A# project
  dev             Start the development server
  build           Create a production build
  preview         Preview the production build

Run "asharp <command> --help" for details on a specific command.
`);
}

async function main() {
  switch (command) {
    case "create":
      console.log("→ create: not implemented yet");
      break;
    case "dev":
      console.log("→ dev: not implemented yet");
      break;
    case "build":
      console.log("→ build: not implemented yet");
      break;
    case "preview":
      console.log("→ preview: not implemented yet");
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
