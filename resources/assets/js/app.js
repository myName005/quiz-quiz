

require('./base');

window.Vue = require('vue')
window.Router = require('vue-router').default

Vue.use(Router)


window.router = new Router({
	routes:require('./routes.js')
})

router.beforeEach(require('./midlleware.js'))


window.app = new Vue({
	el:'#app',
	router:router,
})