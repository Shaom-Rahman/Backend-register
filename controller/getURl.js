const getUrl = (req, res)=>{
const {longUrl} = req.body 




res.send(longUrl)

}

module.exports = getUrl