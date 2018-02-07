const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  position: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  company_id: {type: mongoose.Schema.Types.ObjectId, ref: 'company'}
})

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact
