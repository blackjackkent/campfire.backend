import Streamers from '../models/streamers';
import Streams from '../models/streams';

Streams.sync({ force: true }).then(() => {
	// eslint-disable-next-line no-console
	console.log('Streams table synced.');
});

Streamers.sync({ force: true }).then(() => {
	// eslint-disable-next-line no-console
	console.log('Streams table synced.');
});
