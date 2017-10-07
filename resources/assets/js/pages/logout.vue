<script>
	module.exports = {
		mounted:function () {
			Token.remove()
			this.$router.push('/login')
		}
	}
</script>