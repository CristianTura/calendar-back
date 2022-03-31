/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const router = Router();


const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post(
    '/new',
     [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
     ], 
     crearUsuario );

router.post('/', loginUsuario );

router.get('/renew', revalidarToken );

module.exports = router;