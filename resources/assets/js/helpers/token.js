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

Token.remove = function () {
	window.localStorage.removeItem('token')
}

module.exports = Token
