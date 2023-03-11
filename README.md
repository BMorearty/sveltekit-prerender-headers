# sveltekit-prerender-headers

Reproducible case for SvelteKit bug: prerendered pages always use
Content-Type: text/html, not the content type that was specified
in the code.

## Instructions

First, build it for production (bug does not reproduce in dev mode):
`$ pnpm install && pnpm build && pnpm preview`

Then in your browser, open the Network debug panel.

Then go to http://localhost:4173/atom.xml. Note in the Network panel that the `Content-Type`
is `text/html` when i should be `application/atom+xml`, and there is no `Cache-Control`
header. Both headers are specified in `/src/routes/atom.xml/+server.ts` but are being ignored.

Also note that atom.xml renders as an HTML page, not as XML. That's due to the incorrect
`Content-Type`.
