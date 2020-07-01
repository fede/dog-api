const marked = require('marked')
const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
  const READMEPath = path.join(__dirname, '../README.mdx')
  const readmeContents = fs.readFileSync(READMEPath, 'utf8')
  res.send(marked(readmeContents))
}
