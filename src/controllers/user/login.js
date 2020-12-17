import user from "../../services/user"
import { compare } from "../../utils/password"

export default async function (req, res) {
  try {
    const { email, password } = req.body // Sous forme de json { name: 'Hey' }

    const u = await user.findByEmail(email)
    console.log(u)

    if (u && compare(password, u.password)) {
      res.json(u)
    } else {
      res.status(403).send({
        statusCode: 200,
        data: {
          message: "Unvalid user",
        },
      })
    }

    // Ici tu peux filtrer les informations que tu reçois de ton app (pour securiser)
  } catch (e) {
    console.error(e.message)
    res.status(400).send(e.message)
  }
}
