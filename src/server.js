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
//config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', webRoutes)
app.listen(port, hostname, ()=> {
      console.log(`Server is running on port ${port}`)
})

