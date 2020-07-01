const foods = require('../lib/foods')
const Alea = require('alea')
const withCheckMD5 = require('../lib/withCheckMD5')

const AUTH_KEY = 'afbe40f8-e5c6-49ab-bfd6-57eba05ae1a0'

module.exports = withCheckMD5((req, res) => {
  const seededRandom = new Alea(req.query.md5email)
  const authToken = req.headers.authorization || req.headers.Authorization
  return authToken === AUTH_KEY
    ? res.json({
        darkMode: seededRandom() >= 0.5,
        food: foods[Math.floor(seededRandom() * foods.length + 1)],
      })
    : res.status(401).send('Missing or bad auth token')
})
