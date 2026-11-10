# Project memory

## Product intent & audience

- App appears to be a downloadable "streamer companion" tool with a landing/download page.
- Homepage showcases a logo (`icon.png`) and a screenshot ("pro review board" image).
- Download button links out to MediaFire for file distribution.

## Brand personality & voice

- Utility/tool focused; minimal copy observed so far.
- Download page favors simplicity: one prominent button, one clear URL variable to update.

## Visual design & UX direction

- Vite + React app originally generated via Lovable.
- Static images served from `public/` (moved off Lovable `.asset.json` platform format).
- Logo used in site header, homepage, and as favicon.
- Download button opens external MediaFire link via `target="_blank"`; `download` attribute removed so the URL opens properly in a new tab rather than triggering a local file download.
- Pattern: keep external/external-shareable URLs as a named constant at top of component for easy editing.

## Decisions, constraints & rationale

- Images (`icon.png`, screenshot) copied from project root into `public/`; all `.asset.json` imports replaced with direct `/public` paths for reliable loading.
- `STREAMER_COMPANION_URL` constant placed at top of download page code as the single edit point for the MediaFire link.
- Build cannot run in current environment due to pre-existing missing platform dependency `@lovable.dev/vite-tanstack-config` (Lovable-specific). This is not caused by recent changes; builds may need Lovable platform or that dependency installed.
- Old unused `.asset.json` files removed.

## Open questions & assumptions

- Actual MediaFire URL not yet provided; placeholder remains in `STREAMER_COMPANION_URL`.
- How to build/verify outside Lovable (dependency resolution for `@lovable.dev/vite-tanstack-config`).
- Whether additional pages or components also reference images or external links that may need similar path/link updates.