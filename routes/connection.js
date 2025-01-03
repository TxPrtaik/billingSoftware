var mysql = require('mysql')

var util = require('util')

var conn = mysql.createConnection({
    host: "brewde32qo0wqjng6viz-mysql.services.clever-cloud.com",
    user: "ukzu3zsxjttwu1dc",
    password: "brewde32qo0wqjng6viz",
    database: "brewde32qo0wqjng6viz"
})

var exe = util.promisify(conn.query).bind(conn)

module.exports = exe
