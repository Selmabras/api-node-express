import express from 'express'
import authLogin from '../controllers/auth/authLogin.js'
import authLogout from '../controllers/auth/authLogout.js'

const router = express.Router()

router.post('/login', authLogin)
router.post('/logout', authLogout)
export default router