import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({ url }) => {
  const body =
    '<?xml version="1.0" encoding="utf-8" ?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n</feed>';
  const headers = {
    'Cache-Control': `max-age=0, must-revalidate`,
    'Content-Type': 'application/atom+xml',
  };
  return new Response(body, {
    status: 200,
    headers,
  });
};
