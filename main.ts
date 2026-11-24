import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Three stars. The locals are warm, the food is excellent, and the dominant species argues with rectangles for eight hours a day. Would visit again, briefly.";

// One line, 1-200 chars: an alien tourist's review of planet Earth.
if (!TEXT.trim() || TEXT.length > 200) throw new Error("entry text out of range");
if (TEXT.includes("\n")) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
