// const postUser = (req, res) => {
//   res.json({ message: "Post user" })
//}

// export default postUser

//atualizações

import user from '../../models/userModel.js'

const postUser = async (req, res) => {
  try {
    const userData = req.body
    const [result] = await user.create(userData)
    if (result.affectedRows === 1) {
      res.json({
        success: "Usuário inserido com Sucesso!",
        user: {
          id: result.insertId,
          ...userData
        }
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "Erro no Servidor",
    })
  }
}



export default postUser