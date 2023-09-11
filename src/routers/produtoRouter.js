import express from 'express'

import getProduto from '../controllers/produto/getProduto.js'
import postProduto from '../controllers/produto/postProduto.js'
import updateProduto from '../controllers/produto/updateProduto.js'
import deleteProduto from '../controllers/produto/deleteProduto.js'
import listProduto from '../controllers/produto/listProduto.js'

const router = express.Router()


router.get('/', getProduto)

router.get('/list', listProduto)

router.post('/', postProduto)

router.put('/', updateProduto)

router.delete('/', deleteProduto)


export default router
