//////////////////////////////////////////////////////////
//Aca centralizo las validaciones de los datos
/////////////////////////////////////////////////////////

import body from "express-validator"

export const registroReglasValidacion = () => {
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
}