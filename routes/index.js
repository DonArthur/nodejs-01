const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('form', { title: 'Regis form' })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.render('form', { title: 'Regis form' })
})

module.exports = router