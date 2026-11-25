/**
// Entry validated: copies POST.json to the output dir, deterministic, no network.
 * The entrypoint is the X post itself, POST.json names the post,
 * and the gate reads the post's counts from X.
 */

import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
const dest = join(outputDir, "POST.json");

try {
  mkdirSync(outputDir, { recursive: true });
  cpSync(src, dest);
  console.log(dest);
} catch (err) {
  console.error(`Failed to copy POST.json: ${err instanceof Error ? err.message : err}`);
  process.exit(1);
}
