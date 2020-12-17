import Product from "../models/Product"

async function create(product) {
  return await Product.create(product)
}

async function findAll() {
  return await Product.find()
}

async function findByName(name) {
  return await Product.findOne({ name })
}

async function deleteByName(name) {
  return await Product.deleteOne({ name })
}

async function editByName(name, product) {
  return await Product.findOneAndUpdate({ name }, product, {
    new: true,
  })
}

export default {
  create,
  findByName,
  deleteByName,
  findAll,
  editByName,
}
