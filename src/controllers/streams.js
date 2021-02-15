import Streams from '../models/streams';
import Streamers from '../models/streamers';

export const streamsPage = async (req, res) => {
	try {
		const data = await Streams.findAll({
			include: [Streamers]
		});
		res.status(200).json(data);
	} catch (err) {
		res.status(200).json({ error: err });
	}
};
export default streamsPage;
