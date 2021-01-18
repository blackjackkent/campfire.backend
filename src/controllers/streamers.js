import Model from '../models/model';

const streamersModel = new Model('streamers');
export const streamersPage = async (req, res) => {
	try {
		const data = await streamersModel.select(
			'id, display_name, twitch_handle, bio'
		);
		res.status(200).json(data.rows);
	} catch (err) {
		res.status(200).json({ error: err.stack });
	}
};
export default streamersPage;
