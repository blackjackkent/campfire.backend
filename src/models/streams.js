import Sequelize from 'sequelize';
import Model from './model';
import db from './pool';

const Streams = db.define('streams', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	streamer_id: {
		type: Sequelize.INTEGER
	},
	title: {
		type: Sequelize.STRING
	},
	seed_date: {
		type: Sequelize.DATE
	},
	description: {
		type: Sequelize.TEXT
	}
});
const model = new Model(Streams);
export default model;
