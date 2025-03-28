import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { serverConfig } from './config/server.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();

app.use(cors(serverConfig.corsOptions));
app.use(express.json());

app.use(serverConfig.api.prefix, routes);

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API' });
});

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});