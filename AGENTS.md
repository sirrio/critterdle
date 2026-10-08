# Agent guide

This repository inherits the global Codex project policy. The rules below cover
only Critterdle's product, data, verification, licensing, and deployment
requirements.

## Product boundary

- Critterdle is a daily guessing game built around exactly 72 monsters from the
  Dungeons & Dragons SRD 5.2.1.
- Keep the seven comparison traits authoritative: challenge rating, size,
  creature type, alignment, armor class, hit points, and top speed.
- Do not add homebrew, proprietary non-SRD creatures, free-form character
  systems, live-service progression, or unrelated game modes without explicit
  product approval.
- Preserve one shared worldwide puzzle that changes at midnight UTC and allows
  at most seven guesses.
- Player progress, statistics, streaks, and guess distribution remain local to
  the browser. This project has no backend or production database.

## Game data and shared-core contracts

- `src/monsters.generated.json` contains the SRD-derived monster values;
  `src/monsters.tsx` supplies the typed catalog and icon mapping.
- Every monster must have a unique seven-trait signature, a usable icon, and a
  deterministic feedback path within six guesses. Keep this stronger catalog
  guarantee despite the seven-guess allowance. Preserve the 8 x 9 archive.
- Treat the `startUtc`, `multiplier`, and `offset` values in `src/App.tsx` as a
  published continuity contract. Changing them alters the daily answer sequence
  and requires explicit product approval and release-note disclosure.
- `@sirrio/dndle-core` is pinned to an exact GitHub tag archive. Upgrade it only
  through a coordinated core release and re-run all Critterdle checks.
- Keep the storage namespace, public share URL, sibling-game link, and player
  copy stable unless the corresponding user-facing behavior intentionally
  changes.

## Verification

- Install the locked dependency set with `npm ci` when a clean installation is
  required.
- During Coding, select the tests for the changed catalog or game behavior and
  check UI changes in the directly affected flows and viewports.
- In the PR phase, run `npm test` for catalog completeness, unique signatures,
  full daily rotation, and six-guess solvability, plus `npm run build` for strict
  TypeScript checking and the production Vite build.
- For shared UI or interaction changes, the full PR browser check covers the
  production build on desktop and mobile: archive selection, a submitted guess,
  result feedback, icon tooltips, the result dialog, statistics, and sharing.
- A coordinated `dndle-core` upgrade still requires all Critterdle checks as
  specified above under shared-core contracts.
- Pull requests currently run both automated checks on Node 22 through
  `.github/workflows/ci.yml`, including Draft PRs; CI does not yet distinguish
  the two phases.
- For local production-build browser checks, the user starts
  `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort` after the build.
  Check `http://127.0.0.1:4173/` for a successful response before
  browser tests. The static page is the readiness endpoint; no backend is needed.

## Deployment and release

- The intended GitHub Pages production URL is `https://critterdle.com/`, with
  `www.critterdle.com` redirecting there. Domain support is prepared locally;
  the existing deployment remains at `https://sirrio.github.io/critterdle/`
  until the coordinated domain cutover. Check live DNS and Pages settings
  before treating the custom domain as active.
- Keep Vite's relative `base: "./"` so the same build works at the domain root
  and the legacy repository path. This Actions deployment does not need a
  `CNAME` file; configure the custom domain in the repository's Pages settings.
- Keep share links, sibling-game links, canonical URL and social image URLs
  aligned with the production domains. Preserve the storage namespace: changing
  origins does not delete old localStorage, but cannot automatically transfer it.
- `.github/workflows/deploy.yml` builds, tests, and deploys every push to `main`.
  Approving a pull-request merge therefore also approves the production
  deployment and must state both actions explicitly.
- After deployment, smoke-test the live URL on desktop and mobile before
  creating the annotated version tag and matching GitHub release.
- `package.json`, the root package metadata in `package-lock.json`, the release
  branch, the final tag, and the GitHub release must use the same semantic
  version.
- Release notes describe player-visible outcomes and reuse applicable shared
  `dndle-core` wording when the core changes.

## Licensing and attribution

- Original source code is MIT licensed.
- SRD 5.2.1 material remains under CC BY 4.0. Game-icons.net artwork remains
  under CC BY 3.0 and must retain its contributor attribution.
- Keep README credits, in-game credits, bundled assets, and the actual monster
  and icon sources aligned whenever content or artwork changes.
