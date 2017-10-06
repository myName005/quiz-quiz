var route = require('./route.js')

module.exports = [
	route('/','home').withName('home').withMeta({ requiresAuth:true}),
	route('/login','login'),
	route('/register','register'),
]
