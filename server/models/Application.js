const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({

  jobTitle: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },

  applicantEmail: {
    type: String,
    required: true
  },

  appliedAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model(
  'Application',
  applicationSchema
)