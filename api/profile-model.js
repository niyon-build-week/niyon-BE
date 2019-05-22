const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findByUser,
	update
};

async function add(profile) {
	return db('user_profiles').insert(profile).returning('*');
}

function find() {
	return db('user_profiles');
}

function findByUser(user_id) {
	return db('user_profiles')
		.where({ user_id })
		.first();
}

async function update(profile) {
	const updated = await db('user_profiles')
		.where({ user_id: profile.user_id })
		.update(profile);
	if (updated) {
		return findByUser(profile.user_id);
	} else {
		return 0;
	}
}
