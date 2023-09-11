import produto from '../../models/produtoModel.js'

const listProduto = async (req, res) => {

    try {
        const [rows] = await produto.getAll()
        if (rows.length === 0) {
            res.status(404).json({
                error: `Nenhum produto Encontrado!`
            })

        } else {
            res.json({
                sucess: "Produtos(s) Encontrado(s) com Sucesso",
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

export default listProduto