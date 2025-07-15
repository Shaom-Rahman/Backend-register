const { default: mongoose } = require("mongoose")

const dbConnection = ()=>{
    mongoose.connect('mongodb+srv://mongo123:mongo123@cluster0.2ms8nmx.mongodb.net/mongo123?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log('db connected')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnection