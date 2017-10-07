module.exports = function (path,view) {
	return {
		path: path,
		component: require('./pages/'+ view+'.vue'),
		
		withMeta:function (meta) {
			this.meta = meta
			return this
		},
		withFilters:function (filters) {
			this.meta = this.meta || {}
			this.meta.filters = filters
			return this
		},
		with:function (parms) {
			for(var key in parms)
				this[key] = parms[key]
			return this
		},
		withName:function (name) {
			this.name = name
			return this
		}
	}
} 