import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import './db';
import { otherReqMW, timeoutMW } from './middlewares';
import routes from './routes';

const app = express();
const port = process.env.port || 3000;

app.use(timeoutMW);
app.use(helmet());
app.use(morgan('short'));
app.use(bodyParser.json());
app.use('', routes);
app.use('/api-docs', express.static(path.join(__dirname, '/../docs')));
app.use('*', otherReqMW);

const server = http.createServer(app);
server.listen(port);

server.on('error', err => console.error(err));
server.on('listening', () =>
  console.log(`listening on port: ${server.address().port}`)
);
