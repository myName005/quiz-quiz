
module.exports = function (to, from, next) {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (! Token.check()) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	} else {
		next() 
	}
}