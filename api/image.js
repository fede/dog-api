const fs = require('fs')
const seedrandom = require('seedrandom')
const withCheckMD5 = require('../lib/withCheckMD5')
const path = require('path')

module.exports = withCheckMD5((req, res) => {
  const { md5email, size } = req.query
  const seededRandom = seedrandom(md5email)
  const imagePath = path.join(
    __dirname,
    `../profile-vectors/dog-${Math.floor(seededRandom() * 30)}.svg`
  )
  let image = fs.readFileSync(imagePath, 'utf8')

  if (size) {
    image = image.replace(
      /width="\d*.+px"/g,
      `width="${size}px" height="${size}px"`
    )
  }

  res.setHeader('content-type', 'image/svg+xml')
  res.send(image)
})
