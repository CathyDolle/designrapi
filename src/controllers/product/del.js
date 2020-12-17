import product from '../../services/product'

/**
 * @swagger
 *
 * /products:
 *   delete:
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

    const prod = await product.deleteByName(name)

    res.json(prod)
  } catch (e) {
    console.error(e.message)
    res.status(400).send(e.message)
  }
}