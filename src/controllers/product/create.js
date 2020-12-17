import product from "../../services/product"

/**
 * @swagger
 *
 * /products:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: body
 *         required: true
 *         type: string
 *       - colors: colors
 *         in: body
 *     responses:
 *       200:
 *         description: product
 */

export default async function (req, res) {
  try {
    const {
      name,
      colors,
      fonts,
      category,
    } = req.body // Sous forme de json { name: 'Hey' }

    // Ici tu peux filtrer les informations que tu reçois de ton app (pour securiser)

    const p = await product.create({
      name,
      colors,
      fonts,
      category,
    })

    res.json(p)
  } catch (e) {
    console.error(e.message)
    res.status(400).send(e.message)
  }
}
