import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import TestRoutes from './routes/test.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
const server = http.createServer(app);

app.use('/api', TestRoutes);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

