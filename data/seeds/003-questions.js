
exports.seed = function(knex, Promise) {
	const fakeQuestions = [];
	const questionCount = 10;
	for (let i=0;i<questionCount;i++) {
		fakeQuestions.push(createFakeQuestion());
	}
	return knex('question').insert(fakeQuestions);
};

const faker = require('faker');
const moment = require('moment');

const createFakeQuestion = () => {
	return {
		user_id: Math.floor(Math.random() * 10 + 1),
		title: faker.random.words(2),
		question_type: faker.lorem.words(2),
		date: `${moment(faker.date.future(1)).format('MMM Do YYYY')}`,
		question: faker.lorem.paragraph(),
		location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
		professional: faker.random.boolean(),
		
	};
}
