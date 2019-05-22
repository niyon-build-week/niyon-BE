const db = require('../data/dbConfig');

module.exports = {
	add,
	remove,
	find,
	findBy,
	findById
};

async function add(user) {
	const [id] = await db('users').insert(user).returning('id');
	return db('users')
		.select('id', 'username')
		.where({ id })
		.first();
}

async function remove(id) {
	return db('users').where({id}).delete();
}

async function find() {
	return db('users').select('id', 'username', 'password');
}

async function findBy(filter) {
	return db('users').where(filter).first();
}

async function findById(id) {
	return db('users')
		.select('id', 'username')
		.where({ id })
		.first();
}
