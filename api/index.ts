import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  return c.json({app:'l1'});
});

app.post('/', async (c) => {
  const input = await c.req.json();
  return c.json(input);
});

export default app; // Directly export the Hono application

