import logger from 'morgan';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';

const app = express();
app.use(logger('dev'));
app.use(
	cors({
		origin: 'https://campfire-stream-team-frontend.herokuapp.com'
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

export default app;
