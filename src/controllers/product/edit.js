import product from "../../services/product"

/**
 * @swagger
 *
 * /products:
 *   put:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         type: string
 *       - colors: colors
 *         in: body
 *         type: array
 *       - name: fonts
 *         in: body
 *         type: string  
 *       - name: category
 *         in: body
 *         type: string 
 *     responses:
 *       200:
 *         description: product
 */

export default async function (req, res) {
  try {
    const { name } = req.params // Dans l'URL: /products/23, id => 23
    const { colors, fonts, category } = req.body // Sous forme de json { name: 'Hey' }

    const prod = await product.editByName(name, {
      colors,
      fonts,
      category,
    })

    res.json(prod)
  } catch (e) {
    console.error(e.message)
    res.status(400).send(e.message)
  }
}
