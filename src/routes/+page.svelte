<h1>Prerender bug: Headers</h1>
<p>
  Reproducible case for SvelteKit bug: prerendered pages always use Content-Type: text/html, not the
  content type that was specified in the code.
</p>
<h2>Instructions</h2>
<p>
  First, build it for production (bug does not reproduce in dev mode): <code
    >$ pnpm install && pnpm build && pnpm preview</code
  >
</p>
<p>Then in your browser, open the Network debug panel.</p>
<p>
  Then go to <a href="/atom.xml">http://localhost:4173/atom.xml</a>. Note in the Network panel that
  the <code>Content-Type</code> is <code>text/html</code> when i should be
  <code>application/atom+xml</code>, and there is no <code>Cache-Control</code> header. Both headers
  are specified in
  <code>/src/routes/atom.xml/+server.ts</code> but are being ignored.
</p>

<style>
  code {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 2px;
  }
</style>
