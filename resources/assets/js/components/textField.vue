<template>
	<div class="form-horizontal">	
		<div class="form-group has-feedback" :class="{'has-error':hasError}">
			<label class="control-label col-sm-2">{{label}}</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" :placeholder="placeholder" 
					@input="onInput">
				<span v-if="hasError" class="help-block">{{errorMessage}}</span>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	props:{
		'placeholder':{
			type:String
		},
		'label':{
			type:String
		},
		'has-error':{
			type:Boolean,
			default:false
		},
		'error-message':{
			type:String
		}
	},
	methods:{
		onInput:function (e) {
			this.$emit('input',e.target.value)
		}
	}
}
</script>