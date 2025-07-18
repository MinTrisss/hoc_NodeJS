const { name } = require('ejs');
const connection = require('../config/database')
const {getAllUsers, getUserById} = require('../services/CRUDService');
const { use } = require('../routes/web');

const getHomepage = async (req,res) =>{
      let results = await getAllUsers();
      return res.render('homePage.ejs', {users: results})
}

const exPage = (req,res) => {
      res.send('ex')
}

const getCreatePage = (req,res) =>{
      return res.render('createUsers.ejs')
}

const getUpdatePage = async (req,res) =>{
      const userId = req.params.id

      let user = await getUserById(userId);
      return res.render('editUsers.ejs', {userEdit:user})
}

const postCreateUser = async (req,res)=>{
      
      // let email = req.body.email
      // let name=req.body.name
      // let city= req.body.city
      let {email, name, city} = req.body

      console.log('email: ', email, '; name: ',name, '; city: ', city)

      let [results, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) values (?, ?, ?)`, [email,name,city]
      )
      res.send('Created new user!')

}


module.exports = {getHomepage, exPage, postCreateUser, getCreatePage, getUpdatePage};