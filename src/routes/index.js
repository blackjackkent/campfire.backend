import express from 'express';
import { indexPage, streamersPage, streamsPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/streamers', streamersPage);
indexRouter.get('/streams', streamsPage);

export default indexRouter;
