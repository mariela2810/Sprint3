import { Router } from "express";
import { body, validationResult } from "express-validator";
import { validationResult } from "express-validator";
import { registroReglasValidacion } from "./reglasValidacion";
import { handleValidationErrors } from "./errorMiddleware";

const router = Router()//crea una instancia de router


////////////////////////////////////////////////////////
//Middleware de autenticacion de usuario
////////////////////////////////////////////////////////
const userAuthMiddleware = (req, res, next) => {  //Define un Middleware de autenticacion para ususarios
    console.log('User Authentication Middleware')
    if(!req.headers.authorization){   //verifica el encabezado de autorizacion
        return res.status(401).send('Unauthorized')
    }
    next()
}
router.use(userAuthMiddleware)//aplica el midleware de autorizacion a todas las rutas
//rutas de usuario
router.get('/', (req, res) => {  //define la ruta principal de usuario
    res.send('User List')
})
router.get('/:id', (req, res) => {
    res.send(`User Profile: ${req.params.id}`)
})


////////////////////////////////////////////////////////
//Ruta de registro de usuario con validaciones
////////////////////////////////////////////////////////
router.post('/register', 
    [
    body('email')
    .isEmail()
    .withMessage('Por favor ingrese un mail valido'),
    body('password')
    .isLength({min:6})
    .withMessage('La contraseña debe tener un minimo de 6 caracteres'),
    body('username')
    .notEmpty()
    .withMessage('El usuario es requerido')
    .isAlphanumeric()
    .withMessage('El usuario debe contener letras y numeros')
    ],
    (req,res) => {
        const errors = validationResult(req) //extrae los errores de la validacion actual
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        res.send('Usuario registrado con exito')
    }
)


////////////////////////////////////////////////////////
//validacion y sanitizacion de datos
////////////////////////////////////////////////////////
router.post('/register', 
    [
    body('email')
    .isEmail()
    .withMessage('Por favor ingrese un mail valido')
    .normalizeEmail(), //sanitiza el correo
    body('password')
    .isLength({min:6})
    .withMessage('La contraseña debe tener un minimo de 6 caracteres')
    .trim() //elimina blancos al principio y al final
    .escape(), //escapa caracteres especiales html
    body('username')
    .notEmpty()
    .withMessage('El usuario es requerido')
    .isAlphanumeric()
    .withMessage('El usuario debe contener letras y numeros')
    .trim()
    .escape() //sanitiza el nombre de usuario
    ],
    (req,res) => {
        const errors = validationResult(req) //extrae los errores de la validacion actual
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        res.send('Usuario registrado con exito')
    }
)



////////////////////////////////////////////////////////
//respuesta de errores
////////////////////////////////////////////////////////
router.post('/register', 
    [
    body('email')
    .isEmail()
    .withMessage('Por favor ingrese un mail valido')
    .normalizeEmail(), //sanitiza el correo
    body('password')
    .isLength({min:6})
    .withMessage('La contraseña debe tener un minimo de 6 caracteres')
    .trim() //elimina blancos al principio y al final
    .escape(), //escapa caracteres especiales html
    body('username')
    .notEmpty()
    .withMessage('El usuario es requerido')
    .isAlphanumeric()
    .withMessage('El usuario debe contener letras y numeros')
    .trim()
    .escape() //sanitiza el nombre de usuario
    ],
    (req,res) => {
        const errors = validationResult(req) //extrae los errores de la validacion actual
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:'Validation failed',
                errors:errors.array().map(error =>({ //transforma la lista de errores a un formato mas legible
                    field: error.param,
                    message: error.msg
                }))
            })
        }
        res.send('Usuario registrado con exito')
    }
)


/////////////////////////////////////////////////////////////////////////////////
//respuesta de errores cuando centralizo las validaciones en reglasValidacion.js
/////////////////////////////////////////////////////////////////////////////////
router.post('/register', registroReglasValidacion(), (req,res) => {
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    res.send('Usuario registrado exitosamente')
})


////////////////////////////////////////////////////////////////////////////////////
//respuesta de errores cuando centralizo la gestio de errores en errorMiddleware.js
////////////////////////////////////////////////////////////////////////////////////
router.post('/register', registroReglasValidacion(), handleValidationErrors, (req, res) => {
    res.send('Usuario registrado exitosamente')
})


export default router  //exporta el router para usarlo en app.js