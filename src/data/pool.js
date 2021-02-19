import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import { connectionString } from '../settings';

dotenv.config();

const sequelize = new Sequelize(connectionString, {
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false
		}
	}
});
sequelize
	.authenticate()
	.then(() => {
		// eslint-disable-next-line no-console
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		// eslint-disable-next-line no-console
		console.log('Unable to connect to the database:', err);
	});
export default sequelize;
