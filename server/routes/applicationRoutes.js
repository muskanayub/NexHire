const express = require('express')

const Application = require('../models/Application')

const router = express.Router()

router.post('/apply', async (req, res) => {

  try {

    const {
      jobTitle,
      company,
      applicantEmail
    } = req.body

    const application = await Application.create({
      jobTitle,
      company,
      applicantEmail
    })

    res.status(201).json({
      message: 'Job Applied Successfully',
      application
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

})

module.exports = router