var Token = {}

Token.store = function (token) {
	window.localStorage.setItem('token',token)
}

Token.retrive = function () {
	return window.localStorage.getItem('token')
}

Token.check = function () {
	return (Token.retrive() != null)
}

module.exports = Token
