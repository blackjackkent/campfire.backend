import Streams from '../models/streams';

export const streamsPage = async (req, res) => {
	try {
		const data = await Streams.findAll();
		res.status(200).json(data);
	} catch (err) {
		res.status(200).json({ error: err });
	}
};
export default streamsPage;
