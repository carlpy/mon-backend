import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

/* import "dotenv/config";

const { PORT } = process.env; */

const app = express();

// middlewares zone
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));

app.listen(3000, () => {
	console.log('Listening from ', 3000);
	console.log('Hello world');
});
