const fs = require('fs')
const seedrandom = require('seedrandom')
const withCheckMD5 = require('../lib/withCheckMD5')
const path = require('path')

module.exports = withCheckMD5((req, res) => {
  const seededRandom = seedrandom(req.query.md5email)
  const imagePath = path.join(
    __dirname,
    `../profile-vectors/dog-${Math.floor(seededRandom() * 30)}.svg`
  )
  const image = fs.readFileSync(imagePath, 'utf8')

  res.setHeader('content-type', 'image/svg+xml')
  res.send(image)
})
