import user from "../../services/user"
import { hash } from "../../utils/password"

export default async function (req, res) {
  try {
    const { name, lastName, email, password } = req.body // Sous forme de json { name: 'Hey' }

    const u = await user.create({
      name,
      lastName,
      email,
      password: hash(password),
    })

    // Ici tu peux filtrer les informations que tu reçois de ton app (pour securiser)

    res.json(u)
  } catch (e) {
    console.error(e.message)
    res.status(400).send(e.message)
  }
}
