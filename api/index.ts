import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';

const app = new Hono().basePath('/api');

// app.get('/', (c) => {
//   return c.body('Hello from Hono!');
// });

app.get('/', (c) => {
  // Retrieve IP address and user-agent
  const ip = c.ip;
  const userAgent = c.req.headers.get('user-agent'); 


  // Prepare response data
  const response = {
    message: 'Hello from Hono!',
    ip,
    userAgent,
         latitude: c.req.headers.get('x-vercel-ip-latitude'),
    longitude: c.req.headers.get('x-vercel-ip-longitude'),
    city: c.req.headers.get('x-vercel-ip-city'),
    region: c.req.headers.get('x-vercel-ip-country-region'),
    country: c.req.headers.get('x-vercel-ip-country'),
  };

  // Use c.json to send the data as JSON
  return c.json(response);
});

app.post('/', async (c) => {
  const input = await c.req.json();
  return c.json(input);
});

export default handle(app);
