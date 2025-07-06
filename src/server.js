require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const express = require('express')
const webRoutes = require('./routes/web')
const app = express()
const mysql=require('mysql2')
console.log(process.env)

const port = process.env.PORT || 3000
const hostname = process.env.HOSTNAME

configViewEngine(app)

//test connection
const connection=mysql.createConnection({
      host: 'localhost',
      port:3307, //default: 3306
      user:'root',
      password: '123456',
      database:'hoidanit'
})

connection.query(
      'select * from Users u;',
      function(err,results,fields) {
            console.log("Result= ",results);
            console.log("Fields= ",fields);
      }

)

app.use('/test', webRoutes)
app.listen(port, hostname, ()=> {
      console.log(`Server is running on port ${port}`)
})

