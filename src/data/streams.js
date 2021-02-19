import Sequelize from 'sequelize';
import db from './pool';

const streams = db.define(
	'streams',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		streamerId: {
			type: Sequelize.INTEGER
		},
		refName: {
			type: Sequelize.STRING
		},
		seedDate: {
			type: Sequelize.DATE
		},
		length: {
			type: Sequelize.DOUBLE
		}
	},
	{ timestamps: false }
);

export default streams;
