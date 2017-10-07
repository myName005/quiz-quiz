var Filter = require('./filter.js')

var guest = new Filter('guest', function (to, from, next) {
	if ( Token.check()) {
		next({ path: '/' })
	} else {
		next()
	}
})

module.exports = guest