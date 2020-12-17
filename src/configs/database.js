import mongoose from 'mongoose'

const clientOptions = {
  useNewUrlParser: true
}

async function start () {
  try {
    await mongoose.connect(process.env.DB_HOST, {
      ...clientOptions,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD
    })
    console.log('Connected to MongoDB.')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
  start
}