<template>
<div class="container"><div class="row"><div class="col-md-6 col-sm-offset-3">
		<h2 class="text-center">Register</h2>
		<div class="form-horizontal">
			
			<div class="form-group has-feedback" :class="nameFieldClass">
				<label class="control-label col-sm-2" for="name">Name:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" placeholder="Enter Your Name" v-model="name">
					<span class="help-block">
						<template v-for="err in error.errors.name">
							{{err}}
						</template>
					</span>
				</div>
			</div>

			<div class="form-group has-feedback" :class="emailFieldClass">
				<label class="control-label col-sm-2" for="email">Email:</label>
				<div class="col-sm-10">
					<input type="email" class="form-control" placeholder="Enter email" v-model="email">
					<span class="help-block">
						<template v-for="err in error.errors.email">
							{{err}}
						</template>
					</span>
				</div>
			</div>


			<div class="form-group has-feedback" :class="passwordFieldClass">
				<label class="control-label col-sm-2" for="password">Password:</label>
				<div class="col-sm-10">
					<input type="password" class="form-control" placeholder="Enter password" v-model="password">
					<span class="help-block">
						<template v-for="err in error.errors.password">
							{{err}}
						</template>
					</span>
				</div>

			</div>



			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button class="btn btn-default" @click="register" >Register</button>
				</div>
			</div>
			
			<div class="alert alert-danger" v-show="error.has">
				{{error.message}}
			</div>
		</div>
</div></div></div>
</template>

<script>
module.exports = {
	data(){return{
		email:'',
		password:'',
		name:'',
		error:{
			has:false,
			message:'',
			errors:{}
		}
	}},
	methods:{

		register(){
			$this = this
			data = { 
				email : $this.email,
				password : $this.password,
				name : $this.name,
			}
			axios.post('/api/auth/register' , data)
			.then(function (response) {
				if( response.data.token ){
					Token.store( response.data.token )

					var path =  '/'
					$this.$router.push(path)
				}
			})
			.catch(function (err) {
				if(err.response!= null && err.response.data != null){
					$this.error.has = true
					$this.error.message = err.response.data.message
					$this.error.errors = err.response.data.errors||{}
				}
				else{
					$this.error.has = true
					$this.error.message = 'We have some problems ,please try later'
				}
			})
		},
	},

	computed:{
		emailError(){
			return (this.error.errors.email != null)
		},
		passwordError(){
			return (this.error.errors.password != null)
		},
		nameError(){
			return (this.error.errors.name != null)
		},

		emailFieldClass(){
			return {'has-error':this.emailError }
		},
		passwordFieldClass(){
			return {'has-error':this.passwordError}
		},
		nameFieldClass(){
			return {'has-error':this.nameError}
		},

	}
}
</script>