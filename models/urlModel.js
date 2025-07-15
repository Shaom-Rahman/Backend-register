const mongoose = require('mongoose')
const {Schema} = mongoose


const urlSchema = new Schema({
    longUrl: {
        type: String,
        required: true
    },
    randomCode: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model('allUrl' , urlSchema)