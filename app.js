import express from "express"
import userRouters from "./userRouters.js"

const app = express()

//middleware para analizar JSON
app.use(express.json())

//usamos el router para las rutas de usuario
app.use('/users', userRouters)

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})