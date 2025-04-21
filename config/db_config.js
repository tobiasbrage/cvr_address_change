module.exports = function(app) {

	const mysql = require('mysql');

	const connection = mysql.createConnection({
		host     : 'mysql34.unoeuro.com',
		user     : 'sjaellands_erhvervsrengoeri_dk1',
		password : 'pD54aRed9kHE3BAfrtyx',
		database : 'sjaellands_erhvervsrengoering_papirflyver_dk_db',
		port : 3306
	});

	connection.connect();

	global.db = connection;

};