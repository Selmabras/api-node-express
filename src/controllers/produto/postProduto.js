import produto from '../../models/produtoModel.js'

const postProduto = async (req, res) => {
  try {
    const produtoData = req.body
    const [result] = await produto.create(produtoData)
    if (result.affectedRows === 1) {
      res.json({
        success: "Produto inserido com Sucesso!",
        produto: {
          id: result.insertId,
          ...produtoData
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
export default postProduto