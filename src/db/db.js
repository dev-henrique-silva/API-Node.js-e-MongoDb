
const mongoose = require('mongoose')

// require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongo connected')
}).catch(err => {
    console.log(err)
})


module.exports = mongoose