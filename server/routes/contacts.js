const express = require('express')

const contactsController = require('../controllers/contact.controller')

const router = express.Router()

router.get('/', contactsController.getAll)
router.post('/add',contactsController.addContact)
router.put('/update', contactsController.updateContact)
router.put('/updateCompanyName', contactsController.updateContactCompanyName)
router.delete('/delete', contactsController.deleteContact)
router.delete('/deleteContactCompany', contactsController.deleteContactsCompany)

module.exports = router
