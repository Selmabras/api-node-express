//const updateUser = (req, res) => {
//    res.json({ message: "Update user" })
//}

import user from '../../models/userModel.js'

const updateUser = async (req, res) => {
	try {
		console.log('a')
		const userData = req.body
		const [result] = await user.update(userData)
		
		if (result.affectedRows > 0) {
			res.json({
				success: "Usuário atualizado com Sucesso!",
			})
		}
	} catch (error) {

		console.log(error)
		res.status(500).json({
			error: "Erro no Servidor",
		})
	}
}


export default updateUser