import Sequelize from 'sequelize';
import Model from './model';
import db from './pool';

const Streamers = db.define('streamers', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	display_name: {
		type: Sequelize.STRING
	},
	twitch_handle: {
		type: Sequelize.STRING
	},
	bio: {
		type: Sequelize.TEXT
	}
});
const model = new Model(Streamers);

export default model;
