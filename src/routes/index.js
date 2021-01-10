import express from 'express';
import settings from '../settings';

const indexRouter = express.Router();
indexRouter.get('/', (req, res) => res.status(200).json({ message: settings.testEnvironmentVariable }));
export default indexRouter;
