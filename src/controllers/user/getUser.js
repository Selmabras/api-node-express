import user from '../../models/userModel.js'

const getUser = async(req, res) => {

    const userData = req.body

    const [rows, fields] = await user.getById(userData.id)

    console.log(rows[0])
 
  
    res.json({
         sucess: "Usuário encontrado com sucesso",
        user: rows[0]
      })
}

export default getUser