import Model from '../models/model';

const streamsModel = new Model('streams');
export const streamsPage = async (req, res) => {
	try {
		const data = await streamsModel.select(
			'id, streamer_id, title, day_of_week, start_time, description'
		);
		res.status(200).json(data.rows);
	} catch (err) {
		res.status(200).json({ error: err.stack });
	}
};
export default streamsPage;
