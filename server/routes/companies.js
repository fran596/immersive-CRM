const express = require('express')

const companiesController = require('../controllers/company.controller')

const router = express.Router()

router.get('/', companiesController.getAll)
router.post('/add',companiesController.addCompany)
router.put('/update', companiesController.updateCompany)
router.delete('/delete', companiesController.deleteCompany)

module.exports = router
