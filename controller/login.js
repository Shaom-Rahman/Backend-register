const { emailRegex, passwordRegex } = require("../helpers/regex")
const authModel = require("../models/authModel")

const loginController = async (req, res) =>{
    const {email, password} = req.body

// ------------------ user validation -------------
    if(!emailRegex.test(email)) return res.status(401).send('email is not valid')
    if(!passwordRegex.test(password)) return res.status(401).send('password is not correct')

 const existUser = await authModel.findOne({email})

   res.send(existUser)

}

module.exports = loginController