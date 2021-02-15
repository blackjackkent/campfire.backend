import Streamers from '../models/streamers';
import Streams from '../models/streams';

export const streamersPage = async (req, res) => {
	try {
		const data = await Streamers.findAll({
			include: Streams
		});
		res.status(200).json(data);
	} catch (err) {
		res.status(200).json({ error: err });
	}
};
export default streamersPage;
