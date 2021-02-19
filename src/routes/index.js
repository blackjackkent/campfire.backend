import express from 'express';
import {
	streamersPage,
	getAllStreams,
	getAllStreamsStatus
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/streamers', streamersPage);
indexRouter.get('/streams', getAllStreams);
indexRouter.get('/streams/status', getAllStreamsStatus);

export default indexRouter;
