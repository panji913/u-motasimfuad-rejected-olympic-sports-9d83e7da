// Rejected Olympic Sports — one funny single-line sport the Olympics turned down.
//
// The program writes exactly one line of text to /output/entry.txt:
// a made-up event, real enough to sound like a broadcast, absurd enough
// to be funny, short enough to fit in 200 characters. No network, no
// input, no randomness: the same line every run, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Synchronised eye-rolling: four athletes roll their eyes in perfect unison while their parents explain the Wi-Fi password for the third time.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outFile}`);
