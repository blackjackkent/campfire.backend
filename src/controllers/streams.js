import Streams from '../data/streams';
import Streamers from '../data/streamers';

export const getAllStreams = async (req, res) => {
	try {
		const data = await Streams.findAll({
			include: [Streamers]
		});
		res.status(200).json(data);
	} catch (err) {
		res.status(200).json({ error: err });
	}
};
export default {};
