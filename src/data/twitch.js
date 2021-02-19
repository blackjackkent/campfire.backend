import axios from 'axios';

export const getStreamsStatus = async (streamerHandles) => {
	axios
		.get('https://api.twitch.tv/helix/streams')
		.then(function (response) {
			// handle success
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});
};
