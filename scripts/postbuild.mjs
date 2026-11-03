import { copyFile } from 'node:fs/promises';

// GitHub Pages does not support SPA rewrites, so every unknown route (e.g. /hiking-storage/arhyz)
// falls back to the 404 file. Serving index.html there keeps client-side routing working on refresh.
await copyFile('dist/index.html', 'dist/404.html');
