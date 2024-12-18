import express from "express"
import usuariosRouter from "./routes/usuarios"

const app = express()

//Middleware para manejar JSON en el cuerpo de las solicitudes
app.use(express.json())

app.use('/usuarios', usuariosRouter)//asignamos el modulo de rutas al prefijo '/usuarios'tye

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))