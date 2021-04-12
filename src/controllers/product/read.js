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
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: product
 */

export default async function (req, res) {
  try {
    const { name } = req.params // Dans l'URL: /products/23, id => 23
    let prod = await product.findByName(name)
        prod = {
          ...prod._doc,
          figma: productPath(prod._doc.name, 'business/figma.zip'),
          stylesheet: productPath(prod._doc.name, 'business/stylesheet.zip'),
          thumbnail: productPath(prod._doc.name, 'thumbnail.jpg')
        }        
    res.json(prod)
  } catch (e) {
    console.error(e.message)
    res.status(400).send(e.message)
  }
}