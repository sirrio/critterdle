# Critterdle

A daily guessing game built around 72 monsters from the 2024 rules in the Dungeons & Dragons System Reference Document 5.2.1.

You have seven guesses to find today's monster. Compare challenge rating, size, creature type, alignment, armor class, hit points, and top speed. Green is an exact match, yellow is a partial alignment match, and arrows point toward the target for ordered values.

🐉 **Live:** https://sirrio.github.io/critterdle/

## Features

- **72 SRD 5.2.1 monsters** in a compact 8 × 9 visual archive
- Seven comparison fields: CR, size, type, alignment, AC, HP, and top speed
- One shared daily monster worldwide, changing at midnight UTC
- Local progress, statistics, streaks, and guess distribution
- Optional names with accessible icon tooltips
- Responsive desktop and mobile layout

## Local development

```bash
npm install
npm run dev
```

## Credits

This work includes material from the System Reference Document 5.2.1 (“SRD 5.2.1”) by Wizards of the Coast LLC, available at [dndbeyond.com/srd](https://www.dndbeyond.com/srd). The SRD 5.2.1 is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/legalcode).

Creature icons by Lorc, Delapouite, and the contributors of [Game-icons.net](https://game-icons.net/), used under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

## License

The original source code is available under the [MIT License](LICENSE). SRD material and icons remain subject to their respective licenses above.

## Local book UI prototype

The TravelBook skin is local only until further user instruction. It uses original
Crusenho PNGs with nine-slice borders: cover 12px, pages 8px, buttons 6px and
slots 4px. Asset provenance and SHA-256 hashes are in `public/book-ui/sources.json`.
Desktop keeps the 8 × 9 archive; mobile uses a bounded scrolling selection.
The logo mark uses the existing brand artwork with a tighter SVG viewBox.
The local `dndle-core` candidate adds seven guesses, compact selection controls
and a results list that grows as guesses are submitted. The daily sequence and
storage namespace are unchanged; completed six-guess rounds retain their original
limit, and existing statistics are preserved when adding the seventh distribution
slot. The pinned dependency remains unchanged until a coordinated core release.
Catalog tests retain the stronger guarantee that every monster can be found
within six guesses.

Local preview (alongside Spelldle on port 5173):

```bash
npm run dev -- --host 127.0.0.1 --port 5174 --strictPort
```

The root page at http://127.0.0.1:5174/ is the readiness endpoint.

Book UI artwork by [Crusenho Agus Hennihuno](https://crusenho.itch.io/complete-ui-book-styles-pack),
from the Complete UI Book Styles Pack (TravelBook). Original PNGs are unmodified;
the layout and nine-slice display are adapted for Critterdle. The artwork uses
the creator's custom license in `public/book-ui/LICENSE.txt`, not the source-code
MIT license. The full purchased pack is not included.

## Book theme implementation

`src/book-layout.css` is intentionally identical in Spelldle and Critterdle.
Until a coordinated core release, keep the two local copies in sync. The
project-specific `src/index.css` contains only palette and original sprite
metrics. Both games use the same page sizes, content insets, controls,
84px mobile cards and 4/3/2-column mobile breakpoints. Sprite pixels render at
2x; corner painting is independent of layout spacing. Modal padding is explicit.
Used entries remain legible and the found entry retains full opacity.
Button labels move with the original pressed artwork without shifting hit areas.

TravelBook uses original button frame `_3` for the held state; `_2` clips the bottom outline.
