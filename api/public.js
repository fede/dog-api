const names = require('../lib/names')
const Alea = require('alea')
const withCheckMD5 = require('../lib/withCheckMD5')

module.exports = withCheckMD5((req, res) => {
  const seededRandom = new Alea(req.query.md5email)
  const age = Math.floor(seededRandom() * 20)
  const name = names[Math.floor(seededRandom() * names.length + 1)]
  res.json({
    name,
    age,
  })
})
