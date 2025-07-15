const connection = require('../config/database')

const getHomepage = (req,res) =>{
      return res.render('homePage.ejs')
}

const exPage = (req,res) => {
      res.send('ex')
}

const postCreateUser = (req,res)=>{
      
      // let email = req.body.email
      // let name=req.body.name
      // let city= req.body.city
      let {email, name, city} = req.body

      console.log('email: ', email, '; name: ',name, '; city: ', city)

      connection.query(
            `INSERT INTO Users (email, name, city) values (?, ?, ?)`,
            [email,name,city],
            function(err, results){
                  console.log('Results:', results)

                  res.send('Created new user')
            }

      )

}
module.exports = {getHomepage, exPage, postCreateUser};