import User from "../models/User"

async function create(user) {
  return await User.create(user)
}

async function findByEmail(email) {
  return await User.findOne({ email })
}

export default {
  create,
  findByEmail
}
