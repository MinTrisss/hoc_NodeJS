const connection = require('../config/database')

const getHomepage = (req,res) =>{
      return res.render('homePage.ejs')
}

const exPage = (req,res) => {
      res.send('ex')
}
module.exports = {getHomepage, exPage};