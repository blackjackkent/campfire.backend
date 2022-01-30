import { ApiClient } from 'twitch';
import { ClientCredentialsAuthProvider } from 'twitch-auth';
import { twitchClientId, twitchClientSecret } from '../settings';

const authProvider = new ClientCredentialsAuthProvider(
	twitchClientId,
	twitchClientSecret
);
const apiClient = new ApiClient({ authProvider });

export async function filterStreamersByCurrentlyLive(usernames, force = false) {
	const filter = {
		userName: usernames
	};
	const streams = await apiClient.helix.streams.getStreams(filter);
	const currentlyLiveStreamers = streams.data.map((s) =>
		s.userName.toLowerCase()
	);
	if (force) {
		// currentlyLiveStreamers.push('wupuga');
		currentlyLiveStreamers.push('blackjack_kent');
	}
	return currentlyLiveStreamers;
}
export default {};
