import Streamers from '../models/streamers';
import Streams from '../models/streams';

let blackjackKent = {
	display_name: 'BlackjackKent',
	twitch_handle: 'blackjack_kent',
	bio: 'BlackjackKent is a streamer and nerd.'
};
let wupuga = {
	display_name: 'Wupuga',
	twitch_handle: 'wupuga',
	bio: 'Wupuga is a streamer and nerd.'
};
(async () => {
	await Streams.table.sync({ force: true });
	// eslint-disable-next-line no-console
	console.log('Streams table synced');
	await Streamers.table.sync({ force: true });
	// eslint-disable-next-line no-console
	console.log('Streamers table synced');
	blackjackKent = await Streamers.create(blackjackKent);
	await Streams.create({
		streamer_id: blackjackKent.id,
		title: 'Friday Night Game Brigade',
		seed_date: '2021-01-16 03:00:00',
		description: 'Variety stream fun times!'
	});
	await Streams.create({
		streamer_id: blackjackKent.id,
		title: 'Monday Night Skill Check',
		seed_date: '2021-01-12 00:00:00',
		description: 'Soulslikes and other challenging stuff.'
	});
	wupuga = await Streamers.create(wupuga);
	await Streams.create({
		streamer_id: wupuga.id,
		title: '',
		seed_date: '2021-01-15 01:30:00',
		description: 'Wupuga Thursday Stream'
	});
	await Streams.create({
		streamer_id: wupuga.id,
		title: '',
		seed_date: '2021-01-17 19:30:00',
		description: 'Wupuga Sunday Stream'
	});
})();
