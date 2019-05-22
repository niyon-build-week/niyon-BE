
const db = require('../data/dbConfig');

module.exports = {
	add,
	remove,
	find,
	findById,
	findByUser,
	update
};

async function add(question) {
	return db('question').insert(question).returning('*');
}

async function remove(id) {
	return db('question').where({id}).delete();
}

async function find() {
	return db('question');
}

async function findByUser(user_id) {
	return db('question').where({user_id});
}

async function findById(id) {
	return db('question')
		.where({ id })
		.first();
}

async function update(question) {
	return db('question').where({id:question.id}).update(question);
}
