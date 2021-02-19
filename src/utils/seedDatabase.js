import Streamers from '../data/streamers';
import Streams from '../data/streams';

let blackjackKent = {
	displayName: 'BlackjackKent',
	twitchHandle: 'blackjack_kent',
	bio: 'BlackjackKent is a streamer and nerd.'
};
let wupuga = {
	displayName: 'Wupuga',
	twitchHandle: 'wupuga',
	bio: 'Wupuga is a streamer and nerd.'
};
(async () => {
	await Streamers.sync({ force: true });
	// eslint-disable-next-line no-console
	console.log('Streamers table synced');
	await Streams.sync({ force: true });
	// eslint-disable-next-line no-console
	console.log('Streams table synced');
	blackjackKent = await Streamers.create(blackjackKent);
	await Streams.create({
		streamerId: blackjackKent.id,
		refName: 'bjk Friday',
		seedDate: '2021-01-16 03:00:00',
		length: 3
	});
	await Streams.create({
		streamerId: blackjackKent.id,
		refName: 'bjk Monday',
		seedDate: '2021-01-12 00:00:00',
		length: 2
	});
	wupuga = await Streamers.create(wupuga);
	await Streams.create({
		streamerId: wupuga.id,
		refName: 'wupuga Thursday',
		seedDate: '2021-01-15 01:30:00',
		length: 3
	});
	await Streams.create({
		streamerId: wupuga.id,
		refName: 'wupuga Sunday',
		seedDate: '2021-01-17 19:30:00',
		length: 5
	});
})();
