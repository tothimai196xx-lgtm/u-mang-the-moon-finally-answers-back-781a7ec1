// The Moon Finally Answers Back — make.fun bounty
// u-mang-the-moon-finally-answers-back-781a7ec1
// One line, 1-240 characters, in the voice of the Moon answering back
// to the wishes, the howls and the late-night promises of everyone
// staring up at it. The program writes the line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every night the same show: a dog howls like I stole his bone, a kid wishes on me for a bike, a grown man swears he'll change by the next full moon. Four billion years, pal — and the only promise I ever kept was staying up all night.";

const text = ENTRY.trim();
if (text.length < 1 || text.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
