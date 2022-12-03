/**
 *  Users routes  /Auth
 *  host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { fieldsValidator } = require('../middlewares/fieldsValidator');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post(
    '/register', 
    [
        check('name', 'The name is mandatory').not().isEmpty(),
        check('email', 'The email is mandatory').isEmail(),
        check('password', 'The must be 6 characters').isLength({ min: 6 }),
        fieldsValidator,
    ], 
    createUser 
    );

router.post(
    '/',
    [
        check('email', 'The email is mandatory').isEmail(),
        check('password', 'The password must be 6 characters').isLength({ min: 6 }),
        fieldsValidator,
    ],
    loginUser 
    );

router.get('/renew', validateJWT, renewToken );


module.exports = router;
