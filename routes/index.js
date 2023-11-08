const express = require('express')
const mongoose = require('mongoose')
const validator = require('express-validator')

const router = express.Router()
const Registration = mongoose.model('Registration')

router.get('/', (req, res) => {
    res.render('form', { title: 'Regis form' })
})

router.post('/',
    [
        validator.body('name').isLength({ min: 1 }).withMessage('Please enter a name'),
        validator.body('name').isLength({ max: 25 }).withMessage('Max character is 25'),
        validator.body('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an email'),
        validator.body('email').isEmail().withMessage('Input correct email format')
    ],
    (req, res) => {
        const err = validator.validationResult(req)
        if (err.isEmpty()) {
            const regisData = new Registration(req.body)
            regisData.save().then(() => { res.send('Welcome') })
                .catch(() => { res.send('something went wrong') })
        } else {
            res.render('form', { title: 'Regis form', errors: err.array(), data: req.body })
        }
    })

module.exports = router