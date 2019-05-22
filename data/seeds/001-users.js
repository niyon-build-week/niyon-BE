
exports.seed = function(knex, Promise) {
	const fakeUsers = [];
	const userCount = 10;
	for (let i=0;i<userCount;i++) {
		fakeUsers.push(createFakeUser());
	}
	return knex('users').insert(fakeUsers);
};

const faker = require('faker');

const createFakeUser = () => ({
	username: faker.internet.userName(),
	password: faker.internet.password()
});
