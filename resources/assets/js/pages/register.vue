<template>
<div class="container"><div class="row"><div class="col-md-6 col-sm-offset-3">
		<h2 class="text-center">Register</h2>
		<div class="form-horizontal">
			
			<field type="text" label="Name" placeholder="Enter your name" v-model="name"
				:hasError="hasError('name')" :errorMessage="errorMessage('name')"></field>

			<field type="text" label="Email" placeholder="Enter your email" v-model="email"
				:hasError="hasError('email')" :errorMessage="errorMessage('email')"></field>
			
			<field type="password" label="Password" placeholder="Enter a strong password" v-model="password"
				:hasError="hasError('password')" :errorMessage="errorMessage('password')"></field>



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
	components:{
		'field':require('./../components/field.vue')
	},
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
		hasError(field){
			return this.error.errors[field] !=null;
		},
		errorMessage(field){
			if(this.hasError(field))
				return this.error.errors[field].join('<br>');
		},

	},
}
</script>