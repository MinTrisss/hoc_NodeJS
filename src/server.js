require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const express = require('express')
const webRoutes = require('./routes/web')
const app = express()
console.log(process.env)
const connection= require('./config/database')
const port = process.env.PORT || 3000
const hostname = process.env.HOSTNAME

configViewEngine(app)

connection.query(
      'select * from Users u;',
      function(err,results,fields) {
            console.log("Result= ",results);
      }

)

app.use('/test', webRoutes)
app.listen(port, hostname, ()=> {
      console.log(`Server is running on port ${port}`)
})

