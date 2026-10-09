# Critterdle

A daily guessing game built around 72 monsters from the 2024 rules in the Dungeons & Dragons System Reference Document 5.2.1.

You have seven guesses to find today's monster. Compare challenge rating, size, creature type, alignment, armor class, hit points, and top speed. Green is an exact match, yellow is a partial alignment match, and arrows point toward the target for ordered values.

🐉 **Current deployment:** https://sirrio.github.io/critterdle/

**Custom domain prepared locally:** https://critterdle.com/ — see the cutover notes below.

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

## Deploying

GitHub Actions builds the site and deploys `dist/` to **GitHub Pages** after every push to `main`.

### Custom domain cutover

The local release prepares `https://critterdle.com/` as the canonical address.
Share links, social images and the sibling-game link use the new domains.
This does not itself change the deployed site or DNS. Keep this status current
when the coordinated cutover is completed.

Domain ownership was verified in the GitHub account on 2026-10-09. The
`_github-pages-challenge-sirrio` TXT record is installed in ALL-INKL and must
remain in place. The web DNS and repository custom-domain switch are pending
the coordinated release; verification alone does not redirect visitors.

Verify the domain in GitHub first, retain its verification TXT record, then set
`critterdle.com` as the repository's Pages custom domain before changing web DNS.
The intended ALL-INKL records are:

| Name | Type | Value |
| --- | --- | --- |
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `www` | CNAME | `sirrio.github.io.` |

Replace conflicting web records; preserve mail records. The `www` alias redirects
to the apex domain. Enable Enforce HTTPS once GitHub's certificate is ready.
This repository deploys through Actions, so no `CNAME` file is required.
See [GitHub's domain setup guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

Vite retains `base: "./"`; built assets and the favicon work at the domain root
and under the legacy `/critterdle/` path. Check both origins, HTTPS, the `www`
redirect, share/sibling links and social-image URLs after deployment.

Browser progress belongs to its origin. The domain switch preserves the storage
namespace and does not erase the old `sirrio.github.io` data, but existing rounds,
statistics and streaks are not automatically transferred to `critterdle.com`.

## Credits

This work includes material from the System Reference Document 5.2.1 (“SRD 5.2.1”) by Wizards of the Coast LLC, available at [dndbeyond.com/srd](https://www.dndbeyond.com/srd). The SRD 5.2.1 is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/legalcode).

Creature icons by Lorc, Delapouite, and the contributors of [Game-icons.net](https://game-icons.net/), used under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

## License

The original source code is available under the [MIT License](LICENSE). SRD material and icons remain subject to their respective licenses above.

## Book UI release candidate

The TravelBook skin is in the authorized PR phase; deployment remains pending the
coordinated release. It uses original
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
Crusenho [confirms use in an online game with disclosed sources](https://itch.io/post/13320970).
Only the nine sprites needed by this game are included. Their presence does not
grant permission to extract or republish the pack as a separate asset collection;
obtain the artwork and its license from the creator for your own projects.

## Book theme implementation

`src/book-layout.css` is intentionally identical in Spelldle and Critterdle.
Until a coordinated core release, keep the two local copies in sync. The
project-specific `src/index.css` contains only palette and original sprite
metrics. Both games use the same page sizes, content insets, controls,
84px mobile cards and 6/4/3/2-column narrow-screen breakpoints. Sprite pixels render at
2x; corner painting is independent of layout spacing. Modal padding is explicit.
Used entries remain legible and the found entry retains full opacity.
Button labels move with the original pressed artwork without shifting hit areas.

TravelBook uses original button frame `_3` for the held state; `_2` clips the bottom outline.

## Social preview

`public/og.png` is a 1200 x 630 composition of the current book theme, brand mark,
fonts and catalog icons. The original Crusenho sprites and icon artwork are
unchanged; their arrangement is adapted for this social preview. The artwork
credits and licenses above also apply to the composed image.

Run `npm run preview:social` to generate the self-contained
`dist/social-preview.html`. Render that HTML at exactly 1200 x 630 CSS pixels and
1x device scale, wait for its embedded fonts/images to load, then save a viewport
PNG as `public/og.png`. Check it at both full size and 400 x 210 before rebuilding.
The generator reads the current theme tokens and catalog mappings. Keep its
shared layout identical in both game repositories. It uses fixed sample entries,
so the social preview never reveals the daily answer. `npm run build` removes
the temporary HTML and copies only the finished PNG into the production output.

OG and Twitter image URLs include a release version to refresh previously cached
cards when the updated site is deployed.
