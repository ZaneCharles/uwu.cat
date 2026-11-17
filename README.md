# zanemono.com

> Per aspera ad astra.

Personal homepage of Zane Charles (张畅) — [zanemono.com](https://zanemono.com). A tiny landing page with a real-time **ASCII video background** rendered by a WebGL shader, adapted from [uwu.cat](https://uwu.cat) by [Ctrlcvs](https://github.com/CtrlcvsNya), in the spirit of the old Midjourney homepage.

## Features

- **ASCII video in a fragment shader** — the video is sampled per character cell on the GPU and mapped to a glyph atlas by brightness. The CPU only uploads one video texture per frame.
- **CRT look** — phosphor glow, RGB fringing, scanlines, aperture mask, rolling band and barrel curvature.
- **Interaction** — a scrambling lens follows the cursor; every click drops a water ripple (up to 8 at once) that refracts the video.
- **Swarm intro** — a crew of Figma-style multiplayer cursors builds the page live ([Swarm](https://califa.github.io/swarm-site/) by Joel Califa). Click the logo to start: the cursors type the tagline *Zane At Night Explores Maps Of Near Objects . Chart Our Moon*, press Play, and it collapses into its initials **ZANEMONO.COM**; one of them pats the title (Nya~), then they carry the logo into the card together, paint it in, rebuild the card and a powered-off CRT (glass, scanlines copy-pasted down in waves), press Play again and fly off as the TV powers on and the video starts. Everything is accompanied by synthesized piano, keyboard and click sounds.
- Easy on the eyes: per-cell temporal smoothing (no glyph flicker), soft scanlines, a calm looping clip.
- Pauses when the tab is hidden, follows window resizes mid-intro, falls back to a plain animated intro if the swarm script can't load and to a plain video without WebGL. Esc skips the intro.

Name, motto, and links live in `src/app/site.ts`. `INTRO_SENTENCE` is the line the swarm types. Split on spaces, the first letter of each word — and of the standalone `.` — must acrostic to **ZANEMONO.COM**. If it does not, the collapse title will not match.

## Stack

[Next.js](https://nextjs.org) (static export) · [Motion](https://motion.dev) · Tailwind CSS v4 · WebGL · [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/)

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

| Path | What |
| --- | --- |
| `src/app/site.ts` | Name, motto, links, and `INTRO_SENTENCE` (must acrostic to ZANEMONO.COM) |
| `src/app/page.tsx` | Page & intro choreography |
| `src/app/components/AsciiVideo.tsx` | WebGL ASCII / CRT renderer |
| `public/swarm-cursors.js` | Swarm cursor engine + the scripted "session mode" the intro drives |
| `worker/index.ts` | Adds HTTP Range (206) support for videos — required by Safari / iOS |
| `scripts/media-sizes.mjs` | Records media file sizes for the worker at build time |
| `.github/workflows/deploy.yml` | CI: build on PRs, deploy on `main` |

## Deployment

Every push to `main` is built and deployed to Cloudflare Workers by GitHub Actions.

The Worker name in `wrangler.jsonc` is `zanemono-home`. `account_id` is already set there, and the custom domain route is `zanemono.com`. Deploy uses the repository secret `CLOUDFLARE_API_TOKEN` (an API token created from the **Edit Cloudflare Workers** template). Manual deploy: `npm run deploy`.

## License

[CC BY-SA 4.0](LICENSE) © Zane Charles — this adaptation of [uwu.cat](https://github.com/CtrlcvsNya/uwu.cat) by Ctrlcvs. You may share and adapt this work with attribution, under the same license.

**Exception:** the background video `public/media/kitten-540p.mp4` is a re-encode of
[“Kitten, Game, Pets”](https://pixabay.com/videos/kitten-game-pets-4216/) by MixailMixail from Pixabay,
used under the [Pixabay Content License](https://pixabay.com/service/license-summary/). It is **not** covered by CC BY-SA.

`public/swarm-cursors.js` is adapted from the [Swarm Rebuild](https://califa.github.io/swarm-site/) effect by Joel Califa,
which has no published license; it is used here with the original credit kept and is **not** covered by CC BY-SA.

*Per aspera ad astra.*
