var Filter = require('./filter.js')

var auth = new Filter('auth', function (to, from, next) {
	if (! Token.check()) {
		next({
			path: '/login',
			query: { redirect: to.path }
		})
	} else {
		next()
	}
})

module.exports = auth