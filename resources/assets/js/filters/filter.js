

window.Filter = function (name,test) 
{

	var $this = this;

	$this.name = name
	$this.test = test

	$this.detectFilter = function(to) 
	{
		var filterName = $this.name
		return to.matched.some(function (record) 
		{
			if( record.meta.filters == undefined)
				return false;

			return record.meta.filters.some(function (filter) 
			{
				return filter == filterName
			})
		})
	}

	$this.check = function (to,from,next) 
	{
		if($this.detectFilter(to))
		{
			$this.test(to,from,next)
		}
		else{
			next()
		}
	}
}

module.exports = Filter