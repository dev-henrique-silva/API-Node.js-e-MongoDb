
const express = require('express')
const app = express()


require('dotenv').config()

const cors = require('cors')

const PORT = process.env.PORT

const Post = require('./models/Posts')


app.use(express.json())

app.use(cors())




// Criar um novo post.
app.post('/create_post', async (req, res) => {
    try {

        const { title, content } = req.body

        const post = await Post.create({ title, content })
        res.send(post)

        res.send(`Título: ${title}  Conteúdo: ${content}`)

    } catch (err) {
        res.status(400).send(err)
    }
})


// Pegar todos os posts.
app.get('/list_post', async (req, res) => {
    try {

        const posts = await Post.find()

        res.send({ posts })

    } catch (err) {
        res.status(400).send(err)
    }
})



// Pegar apenas 1 post.
app.get('/show_post/:post_id', async (req, res) => {
    try {
        const postId = req.params.post_id

        const post = await Post.findById(postId)

        res.send(post)

    } catch (err) {
        res.status(400).send(err)
    }

})


// Atualizar um post.
app.patch('/updat_post/:post_id', async (req, res) => {
    try {
        const postId = req.params.post_id

        const { title, content } = req.body

        const post = await Post.findByIdAndUpdate(postId, { title, content }, { new: true }) // (new: true) Retorna o post atualizado.

        res.send({ postId, title, content })

    } catch (err) {
        res.status(400).send(err)
    }

})


// Deletar um post
app.delete('/delete_post/:post_id', async (req, res) => {
    try {
        const postId = req.params.post_id

        await Post.findByIdAndDelete(postId)

        res.send({ msg: 'Deletado com sucesso' })

    } catch (err) {
        res.status(400).send(err)
    }
})



app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT)
})
