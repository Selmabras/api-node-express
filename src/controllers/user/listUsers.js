import user from '../../models/userModel.js'

const listtUsers = async (req, res) => {

    try {
        const [rows] = await user.getAll()
        if (rows.length === 0) {
            res.status(404).json({
                error: `Nenhum usuário Encontrado!`
            })

        } else {
            res.json({
                sucess: "Usuário(s) Encontrado(s) com Sucesso",
                user: rows

            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor!",
        })
    }
}

export default getAll