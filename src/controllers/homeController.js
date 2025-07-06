const getHomepage = (req,res) =>{
      res.send('HomeController')
}

const exPage = (req,res) => {
      res.send('ex')
}
module.exports = {getHomepage, exPage};