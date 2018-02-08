const Contact = require('../models/Contact')
const mongoose = require('mongoose');


function getAll(req, res) {
  Contact.find()
    .exec((err, companies) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(companies)
    })
}

function updateContact(req, res) {
  let id = req.body.id
  let newName = req.body.name
  let newEmail = req.body.email
  let newPhone = req.body.phone
  let newPosition = req.body.position
  let newCompany = req.body.company
  let newCompanyId = req.body.company_id
  Contact.findById(id, (err, contacts) => {
    if (err) {
      res.status(500)
      res.send(`Cannot find Contact id ${err}`)
    }
    Contact.update(
      {
        name: newName,
        phone: newPhone,
        email: newEmail,
        position: newPosition,
        company: newCompany,
        company_id: newCompanyId
      }).exec((err, contacts) => {
        if (err) {
          res.status(500)
          res.send(`Cannot update Contact ${err}`)
        }
        res.status(200);
        res.json(contacts)
      })
  })
}

function deleteContact(req, res) {
  let id = mongoose.Types.ObjectId(req.body.id)
  Contact.deleteOne({ "_id": id }, (err, companies) => {
    if (err) {
      res.status(500)
      res.send(`Cannot delete Contact ${err}`)
    }
    res.status(200);
    res.json(companies)
  })
}

function addContact(req, res) {
  let item = req.body
  let compId = mongoose.Types.ObjectId(item.company_id)
  console.log(item)
  let newItem = new Contact({
    name: item.name,
    phone: item.phone,
    email: item.email,
    position: item.position,
    company: item.company,
    company_id: mongoose.Types.ObjectId(item.company_id)
  })
  newItem.save((err, companies) => {
    if (err) {
      res.status(500)
      res.send(`Cannot insert Contact ${err}`)
    }
    res.status(200);
    res.json(companies)
  })
}

function updateContactCompanyName(req, res) {
  let conditions = {company: req.body.old}
  Contact.update(conditions, {$set:{company: req.body.new}},{multi: true},(err, contacts)=>{
    if (err) {
      res.status(500)
      res.send(`Cannot update contacts ${err}`)
    }
    res.status(200);
    res.json(contacts)
  })
}

function deleteContactsCompany(req, res){
  let companyName = req.body.name
  Contact.deleteMany({company: companyName},(err)=>{
    if(err){
      res.status(500)
      res.send(`Cannot delete contacts ${err}`)
    }
    res.status(200)
    res.json({message: "delete successful"})
  })
}

module.exports = {
  getAll,
  updateContact,
  deleteContact,
  addContact,
  updateContactCompanyName,
  deleteContactsCompany
}

