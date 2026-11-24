// The One-Line Exit — a single-line resignation letter.
// The program writes exactly one line of text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hereby resign: after three years of wishing strangers a nice day, I have decided to keep one for myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
