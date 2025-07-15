const { emailRegex, passwordRegex } = require("../helpers/regex")
const authModel = require("../models/authModel")
const bcrypt = require('bcrypt');

const registerController = async (req, res)=>{

    const{userName , email , password} = req.body

    const existUser = await authModel.findOne({email})

// --------------------- user validation -----------------------

    if(!userName) return res.status(401).send('user name required')
    if(!emailRegex.test(email)) return res.status(401).send('email is not valid')
    if(!passwordRegex.test(password)) return res.status(401).send('password not correct')
    if(!existUser) return res.status(401).send('user already exist')



    bcrypt.hash(password, 10)
    .then(function(hash) {

// --------------------- send user data to db ---------------
    const saveAuth = new authModel({
        userName: userName.trim(),
        email: email.trim(),
        password: hash
    })

    saveAuth.save()

        // console.log(hash)
});

    res.status(200).send(existUser)
    // res.status(200).send('user Registered')

    //  console.log(userName.trim())

    // res.send(userName)

}



module.exports = registerController