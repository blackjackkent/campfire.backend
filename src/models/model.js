class Model {
	constructor(table) {
		this.table = table;
	}

	async findById(id) {
		const result = await this.table.findAll({ where: { id } });
		return result;
	}

	async findWhere(where) {
		const result = await this.table.findAll({ where });
		return result;
	}

	async findAll(params = {}) {
		const result = await this.table.findAll(params);
		return result;
	}

	async create(obj) {
		const result = await this.table.create(obj);
		return result;
	}

	async update(obj, where = {}) {
		const result = await this.table.update(obj, { where });
		return result;
	}

	async deleteById(id) {
		const result = await this.table.destroy({ where: { id } });
		return result;
	}

	async deleteWhere(where) {
		const result = await this.table.destroy({ where });
		return result;
	}
}

export default Model;
