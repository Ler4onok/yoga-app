// routing
const {Router} = require('express');
// validation middleware
const {check, validationResult} = require('express-validator');
// config 
const config = require('config');
// libs
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// models
const User = require('../models/User');

const router = Router();

// api/auth/register
router.post('/register',
    [
        check('email', 'Incorrect email.').isEmail(),
        check('password', 'Password length must be more than 6 symbols.').isLength({min: 4})
    ],
    async (request, response) => {
        try {

            const {email, password} = request.body;
            console.log({email, password})

            // if (!validationResult(request).isEmpty()) {
            //     return response.status(400).json({message: 'Incorrect data.'})
            // }

            // check if user exists
            if (await User.findOne({email})) {
                return response.status(400).json({message: 'Such user already exists.'});
            }

            // // encrypt password with 12 sault rounds
            const hashedPassword = await bcrypt.hash(password, 12);

            // // create a new user
            const user = new User({email, password: hashedPassword});

            await user.save();

            return response.status(201).json({message: 'User successfully created.'});

        } catch (error) {
            // TODO: fix responce.status error
            console.log(error)
            // return response.status(500).json({message: 'Something went wrong.'});
        }
    })


router.post('/login',
    [
        check('email', 'Write your email').normalizeEmail().isEmail(),
        check('password', 'Write your password').exists()
    ],
    async (request, response) => {

        try {
            // TODO: create a function to return all errors with status code 400
            if (!validationResult(request).isEmpty()) {
                return response.status(400).json({message: 'Incorrect data.'});
            }

            const {email = '', password} = request.body;

            const user = await User.findOne({email});

            if (!user) {
                return response.status(400).json({message: 'Such user does not exist.'})
            }

            if (! await bcrypt.compare(password, user.password)) {
                return response.status(400).json({message: 'Passwords do not match.'})
            }

            // create a unique token for a user
            const token = jwt.sign(
                {
                    userId: user.id
                },
                config.get('jwtToken'),
                {
                    expiresIn: '1h'
                }
            );

            // return successful response with token 
            response.status(201).json({token, userId: user.id});


        } catch (error) {
            return response.status(500).json({message: 'Something went wrong.'});
        }

    })


// creating and exporting a module
module.exports = router;