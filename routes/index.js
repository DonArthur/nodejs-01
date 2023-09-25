const express = require('express')
const validator = require('express-validator')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('form', { title: 'Regis form' })
})

router.post('/', 
[
    validator.body('name').isLength({ min: 1 }).withMessage('Please enter a name')
    // body('name')
    //     .isLength({ min: 1 })
    //     .withMessage('Please enter a name')
],
(req, res) => {
    const err = validator.validationResult(req)
    if (err.isEmpty()) {
        res.send('Welcome')
    } else {
        res.render('form', { title: 'Regis form', errors: err.array(), data: req.body })
    }
})

module.exports = router