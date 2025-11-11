import express from 'express';
import 'dotenv/config';
import { router } from './routes/router.js';
export const app = express();

app.use(express.json());
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
