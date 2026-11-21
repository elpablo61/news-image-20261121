// news-image-20261121 — "The World in One Day", Saturday 21 November 2026.
// The entry is the newspaper image entry.png beside this file; the program
// copies it to the grader's output directory (MAKEFUN_OUTPUT_DIR, /output).
// The copy is byte-for-byte and deterministic: both grader runs write the
// same bytes.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
