import Sequelize from 'sequelize';
import db from './pool';
import Streams from './streams';

const Streamers = db.define(
	'streamers',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		displayName: {
			type: Sequelize.STRING
		},
		twitchHandle: {
			type: Sequelize.STRING
		},
		bio: {
			type: Sequelize.TEXT
		}
	},
	{ timestamps: false }
);
Streams.belongsTo(Streamers, {
	onDelete: 'CASCADE',
	onUpdate: 'CASCADE',
	foreignKey: {
		allowNull: false
	}
});
Streamers.hasMany(Streams);
export default Streamers;
