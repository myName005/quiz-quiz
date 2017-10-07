

require('./base');

window.Vue = require('vue')
window.Router = require('vue-router').default

Vue.use(Router)


window.router = new Router({
	routes:require('./routes.js')
})

window.filters = require('./filters')
filters.forEach(function (filter) {
	router.beforeEach(filter.check)
})

window.app = new Vue({
	el:'#app',
	router:router,
})