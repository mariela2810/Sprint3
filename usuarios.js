import express from "express";
const router = express.Router()

//obtener todos los usuarios
router.get('/', (req,res) => {
    res.send('Aqui esta la lista de todos los usuarios')
         })

//obtener un usuario especifico por ID
router.get('/:id', (req,res) => {
    const {id} = req.params
    res.send(`Aqui esta la informacion del usuario con Id: ${id}`)
})

//crear un nuevo usuario
router.post('/', (req,res) => {
    const nuevoUsuario = req.body
    res.send(`Nuevo ususario creado con los datos: ${JSON.stringify(nuevoUsuario)}`)
})

//actualizar un usuario por ID
router.put('/:id', (req,res) => {
    const {id} = req.params
    const datosActualizados = req.body
    res.send(`Usuario con id: ${id} a sido actualizado con los datos: ${JSON.stringify(datosActualizados)}`)
})

//eliminar un usuario por id
router.delete('/:id', (req,res) => {
    const {id} = req.params
    res.send(`Usuario con id: ${id} ha sido eliminado`)
})

export default router