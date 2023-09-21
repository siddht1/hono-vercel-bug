import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  return c.body('Hello from Hono!');
});

app.post('/', (c) => {
  return c.body('Only works without body or headers in the request.');
});

export default handle(app);
