import express from 'express';

// middlewares
/* import cookieParser from 'cookie-parser'; */
import cors from 'cors';
import morgan from 'morgan';

// routes
import routes from './routes/index.ts';

import 'dotenv/config';

const { PORT } = process.env;

const app = express();

// middlewares zone
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));

// routes zone
app.use(routes);

app.listen(PORT, () => {
	console.log('Listening from ', PORT);
	console.log('Hello world');
});
