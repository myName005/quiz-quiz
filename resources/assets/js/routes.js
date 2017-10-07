var route = require('./route.js')

module.exports = [
	route('/','home').withName('home').withFilters(['auth']),
	route('/login','login'),
	route('/register','register'),
]
