import { createInterface } from "node:readline/promises";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { stdin, stdout } from "node:process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const TEMPLATE_DIR = fileURLToPath(
  new URL("../../templates/standard/", import.meta.url),
);
const NAME_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const RENAMES = new Map([["_gitignore", ".gitignore"]]);

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

async function askName() {
  const rl = createInterface({ input: stdin, output: stdout });
  try {
    const answer = await rl.question("Project name\n> ");
    return answer.trim();
  } finally {
    rl.close();
  }
}

function validateName(name) {
  if (!name) return "Project name cannot be empty.";
  if (!NAME_PATTERN.test(name)) {
    return (
      `"${name}" is not a valid project name.\n` +
      `Use lowercase letters, numbers, and hyphens, starting with a letter or number.`
    );
  }
  return null;
}

function render(content, vars) {
  return content.replace(/\{\{(\w+)\}\}/g, (match, key) =>
    Object.hasOwn(vars, key) ? vars[key] : match,
  );
}

async function copyDir(src, dest, vars) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, RENAMES.get(entry.name) ?? entry.name);

    if (entry.isDirectory()) {
      await copyDir(from, to, vars);
    } else {
      const content = await readFile(from, "utf8");
      await writeFile(to, render(content, vars));
    }
  }
}

export async function create(args) {
  const name = args[0] ?? (await askName());

  const problem = validateName(name);
  if (problem) return fail(problem);

  const target = path.resolve(process.cwd(), name);

  try {
    await mkdir(target);
  } catch (err) {
    if (err.code === "EEXIST") {
      return fail(
        `A folder named "${name}" already exists here.\n` +
          `Choose a different name or remove the existing folder.`,
      );
    }
    throw err;
  }

  console.log(`\nCreating ${name}...`);
  await copyDir(TEMPLATE_DIR, target, { name });
  console.log(`✓ Created project\n\nReady.\n\n  cd ${name}\n  asharp dev\n`);
}
