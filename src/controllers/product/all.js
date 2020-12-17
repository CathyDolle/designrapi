import product from '../../services/product'
function productPath(name, item){
  return 'http://' + process.env.SERVER_ADDRESS + ':' + process.env.SERVER_PORT + `/public/products/${name}/${item}`
}

/**
 * @swagger
 *
 * /products:
 *   get:
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: products
 */

export default async function (req, res) {
  try {
    let prod = await product.findAll()
    prod = prod.map(item => ({
      ...item._doc,
      figma: productPath(item._doc.name, 'business/figma.zip'),
      stylesheet: productPath(item._doc.name, 'business/stylesheet.zip'),
      thumbnail: productPath(item._doc.name, 'thumbnail.jpg')
    }))
    console.log(prod)
    console.log(process.env.SERVER_ADDRESS)
    res.json(prod)
  } catch (e) {
    console.error(e.message)
    res.status(400).send(e.message)
  }
}