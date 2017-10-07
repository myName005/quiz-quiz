var route = require('./route.js')

module.exports = [
	route('/','home')
		.withName('home')
		.withFilters(['auth']),

	route('/login','login')
		.withName('login')
		.withFilters(['guest']),

	route('/register','register')
		.withName('register')
		.withFilters(['guest']),
]
