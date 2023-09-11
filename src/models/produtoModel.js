import db from '../database/db.js'

const getById = async (id) => {
    return await db.query("SELECT name, tipo, preco FROM produto Where id = ?", [id])

}

const getAll = async () => {
    return await db.query("SELECT name, tipo, preco FROM produto")

}


const create = async (user) => {
    const { name, tipo, preco } = produto
    return await db.query("INSERT INTO produto (name, tipo, preco) VALUES (?, ?, ?);", [name, tipo, preco])

}

const update = async (user) => {
    const {id, name, tipo, preco } = produto
    return await db.query("UPDATE produto SET name = ?, tipo = ?, preco = ?, WHERE id;", [id, name, tipo, preco])

}

const remove = async (id) => {
    return await db.query("DELETE FROM produto WHERE id = ?", [id])
}



export default { getById, create, update, remove, getAll }