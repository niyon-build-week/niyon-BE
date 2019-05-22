exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('users', tbl => {
			tbl.increments();
			tbl.string('username', 128)
				.notNullable()
				.unique();
			tbl.string('password').notNullable();
		})
		.createTable('question', tbl => {
			tbl.increments();
			tbl
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.string('title', 128);
			tbl.string('question_type', 128);
			tbl.string('date', 128);
			tbl.text('question');
			tbl.string('location', 128);
			tbl.boolean('professional').defaultTo(false);
			
		})
		.createTable('user_profiles', tbl => {
			tbl.increments();
			tbl
				.integer('user_id')
				.unsigned()
				.notNullable()
				.unique()
				.references('id')
				.inTable('users')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.string('first_name', 128);
			tbl.string('last_name', 128);
			tbl.string('age', 128);
			tbl.string('gender', 128);
			tbl.string('location', 128);
			tbl.string('language', 128);
			tbl.text('certs');
			tbl.text('profile_text');
			tbl.string('skills', 400);
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('users')
		.dropTableIfExists('user_profiles')
		.dropTableIfExists('question');
};
