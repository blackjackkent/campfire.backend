import Streamers from '../data/streamers';
import Streams from '../data/streams';
import { filterStreamersByCurrentlyLive } from '../data/twitch';

export const getAllStreamers = async (req, res) => {
	try {
		const data = await Streamers.findAll({
			include: Streams
		});
		res.status(200).json(data);
	} catch (err) {
		res.status(200).json({ error: err });
	}
};
export const getCurrentlyLiveStreamers = async (req, res) => {
	try {
		const streamers = await Streamers.findAll();
		const handles = streamers.map((s) => s.twitchHandle);
		const liveStreamers = await filterStreamersByCurrentlyLive(
			handles,
			req.query.force
		);
		res.status(200).json(liveStreamers);
	} catch (err) {
		res.status(200).json({ error: err });
	}
};
