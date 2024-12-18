import { Router } from "express";

const router = Router()

//Lista de usuarios simulada
const users = [
    {id:1, name:'Alice', age:30},
    {id:2, name:'Bob', age:25},
    {id:3, name:'Charlie', age:35},
]

//Ruta para listar usuarios
router.get('/', (req,res) =>{
    res.render('users', {users})
})

//Ruta para mostrar un usuario especifico
router.get('/:id', (req,res) =>{
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (user){
        res.render('userProfile', {user})
    }
    else{
        res.status(404).send('User not found')
    }
})

export default router