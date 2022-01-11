import express from 'express';
import {
	getAllStreamers,
	getAllStreams,
	getCurrentlyLiveStreamers
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/streamers', getAllStreamers);
indexRouter.get('/streamers/live', getCurrentlyLiveStreamers);
indexRouter.get('/streams', getAllStreams);

export default indexRouter;
