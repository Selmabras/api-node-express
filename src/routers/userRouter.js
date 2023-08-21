import express from 'express'

import getUser from '../controllers/user/getUser.js'
import postUser from '../controllers/user/postUser.js'
import updateUser from '../controllers/user/updateUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()

router.get('/', getUser)

router.post('/', postUser)

router.put('/', updateUser)

router.delete('/', deleteUser)



export default router