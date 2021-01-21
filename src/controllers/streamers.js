import Streamers from '../models/streamers';

export const streamersPage = async (req, res) => {
	try {
		const data = await Streamers.findAll();
		res.status(200).json(data);
	} catch (err) {
		res.status(200).json({ error: err });
	}
};
export default streamersPage;
