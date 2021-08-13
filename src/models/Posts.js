
const mongoose = require('../db/db')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})


const Post = mongoose.model('post', postSchema)

module.exports = Post 