const Company = require('../models/Company')
const mongoose = require('mongoose');


function getAll(req, res) {
  Company.find()
    .exec((err, companies) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(companies)
    })
}

function updateCompany(req, res) {
  let id = req.body.id
  let newName = req.body.name
  let newAddress = req.body.address
  let newPhone = req.body.phone
  Company.findById(id,(err, companies)=>{
    if (err) {
      res.status(500)
      res.send(`Cannot find company id ${err}`)
    }
    Company.update({name: newName, address: newAddress, phone: newPhone}).exec((err, companies)=>{
      if(err){
        res.status(500)
        res.send(`Cannot update company ${err}`)
      }
      res.status(200);
      res.json(companies)
    })
  })
}

function deleteCompany(req, res){
  let id = mongoose.Types.ObjectId(req.body.id)
  Company.deleteOne({ "_id" : id }, (err, companies) =>{
    if(err){
      res.status(500)
      res.send(`Cannot delete company ${err}`)
    }
    res.status(200);
    res.json(companies)
  })
}

function addCompany(req, res){
  let item = req.body
  console.log(item)
  let newItem = new Company({
    name: item.name,
    address: item.address,
    phone: item.phone
  })
  newItem.save((err, companies) => {
    if(err){
      res.status(500)
      res.send(`Cannot insert company ${err}`)
    }
    res.status(200);
    res.json(companies)
  })
}

module.exports = {
  getAll,
  updateCompany,
  deleteCompany,
  addCompany
}

