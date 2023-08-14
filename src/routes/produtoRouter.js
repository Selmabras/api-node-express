import express from 'express'

const router = express.Router()


router.get('/', (req, res) => {
    res.json({message: "Bem-vindo ao método get produto"})
})


router.post('/', (req, res) => {
    res.json({message: "Bem-vindo ao método post do produto"})
})

router.put('/', (req, res) => {
    res.json({message: "Bem-vindo ao método put do produto"})
})

router.delete('/', (req, res) => {
    res.json({message: "Bem-vindo ao método delete do produto"})
})


export default router