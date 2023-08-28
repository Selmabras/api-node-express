// const postUser = (req, res) => {
//   res.json({ message: "Post user" })
//}

// export default postUser

//atualizações

import user from '../../models/userModel.js'

const postUser = async(req, res) => {

    const userData = req.body

    const [rows, fields] = await user.getById(userData.id)

    console.log(rows[0])
 
  
    res.json({
         sucess: "Usuário cadastrado com sucesso",
        user: rows[0]
      })
}

export default postUser