import { createTables, insertIntoTables } from './queryFunctions';

(async () => {
	try {
		await createTables();
		await insertIntoTables();
	} catch (e) {
		console.log(e);
	}
})();
