//const express = require('express')
import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routers/userRouter.js';
import produtoRouter from './routers/produtoRouter.js';
import authRouter from './routers/authRouter.js';
import { PORT } from './config.js';

const api = express()
//converte toda requisicao com body json para objeto no req.body
api.use(bodyParser.json())

api.get('/', (req, res) => {
    res.json({ message: "Bem-vindo a nossa API" })
})

api.use('/user', userRouter)

api.use('/produto', produtoRouter)

api.use('/auth', authRouter)



api.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}. http://localhost:${PORT}`)
})