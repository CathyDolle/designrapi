const version = require('../../../package.json').version

export default async function (req, res) {
  res.json({ status: 'ok', version })
}