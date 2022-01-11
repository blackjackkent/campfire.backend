import Streamers from '../data/streamers';
import Streams from '../data/streams';
import seedData from '../data/streamData.json';

const resetDb = async () => {
	await Streamers.sync({ force: true });
	// eslint-disable-next-line no-console
	console.log('Streamers table synced');
	await Streams.sync({ force: true });
	// eslint-disable-next-line no-console
	console.log('Streams table synced');
};

const initStreamer = async (streamerSeedData) => {
	const streamer = await Streamers.create(streamerSeedData);
	streamerSeedData.streams.forEach(async (s) => {
		await Streams.create({
			streamerId: streamer.id,
			...s
		});
	});
	return streamer;
};

(async () => {
	await resetDb();
	seedData.forEach(async (streamer) => {
		await initStreamer(streamer);
	});
})();
