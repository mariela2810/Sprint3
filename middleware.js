import express from "express"

const app = express()

//middleware global para registrar solicitudes
const loggerMiddleware = (req, res, next) => { //definimos el middleware llamandolo loggerMiddleware
    console.log(`Request received: ${req.method} ${req.url}`) //imprime el metodo y la url de cada solicitud
    next() //pasa el control al sig middleware o ruta
}

app.use(loggerMiddleware)//registra el middleware globalmente en la aplicacion

app.get('/', (req,res) =>{//define una ruta simple q responde con hola mundo
    res.send('Hola Mundo')
})

app.listen(3000, () => {
    console.log(`Server corriendo en el puerto 3000`)
})