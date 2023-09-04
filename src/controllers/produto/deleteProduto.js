import produto from "../../models/produtoModel.js"

const deleteProduto = async (req, res) => {
    try {
        const produtoData = req.body
        const [result] = await produto.remove(produtoData.id)
        if (result.affectedRows === 1) {
            res.json({
                success: "Produto apagado com sucesso!"
            })

        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Erro no Servidor",
        })
    }
}


export default deleteProduto