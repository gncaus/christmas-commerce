#!/usr/bin/env node
// Creates a new landing page app from templates/landing.
// Usage: pnpm new:landing <slug> ["Page title"]
import { cpSync, existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const [slug, title] = process.argv.slice(2);

if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error('Uso: pnpm new:landing <slug> ["Título da página"]');
  console.error("O slug deve ter só letras minúsculas, números e hífens (ex.: pisca-pisca).");
  process.exit(1);
}

if (title && /["\\<>{}`]/.test(title)) {
  console.error('O título não pode conter os caracteres " \\ < > { } `');
  process.exit(1);
}

const name = `lp-${slug}`;
const appsDir = join(root, "apps");
const target = join(appsDir, name);

if (existsSync(target)) {
  console.error(`apps/${name} já existe.`);
  process.exit(1);
}

// Each app gets its own dev port so `pnpm dev` can run all of them at once.
const usedPorts = readdirSync(appsDir)
  .map((dir) => join(appsDir, dir, "package.json"))
  .filter(existsSync)
  .map((file) => JSON.parse(readFileSync(file, "utf8")).scripts?.dev?.match(/--port (\d+)/)?.[1])
  .filter(Boolean)
  .map(Number);
const port = Math.max(3000, ...usedPorts) + 1;

cpSync(join(root, "templates", "landing"), target, { recursive: true });

const replacements = { __NAME__: name, __PORT__: String(port), __TITLE__: title ?? slug };
for (const file of ["package.json", "app/layout.tsx", "app/page.tsx"]) {
  const path = join(target, file);
  let content = readFileSync(path, "utf8");
  for (const [key, value] of Object.entries(replacements)) content = content.replaceAll(key, value);
  writeFileSync(path, content);
}

console.log(`Criado apps/${name} (porta ${port}).`);
console.log("Próximos passos:");
console.log("  1. pnpm install");
console.log(`  2. pnpm --filter ${name} dev`);
console.log(`  3. Na Vercel: novo projeto deste repositório com Root Directory = apps/${name}`);
