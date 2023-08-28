import db from '../database/db.js'

const getById = async (id) => {
    return await db.query("SELECT name, email FROM users Where id = ?", [id])

} 

const criarUsario = async (id) => {
    return await db.query("INSERT name, email FROM users Where id = ?", [id])
    
} 


export default {getById, criarUsario}