import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  // Retrieve IP address and user-agent
  const ip = c.ip;
  const userAgent = c.req.headers.get('user-agent'); // Access user-agent header

  // Prepare response data
  const response = {
    message: 'Hello from Hono!',
    ip,
    userAgent,
  };

  // Use c.json to send the data as JSON
  return c.json(response);
});

app.post('/', async (c) => {
  const input = await c.req.json();
  return c.json(input);
});

export default handle(app);
