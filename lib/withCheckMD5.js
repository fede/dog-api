const md5regex = /^[a-f0-9]{32}$/i

module.exports = (apiFn) => (req, res) => {
  return md5regex.test(req.query.md5email)
    ? apiFn(req, res)
    : res.status(400).send('Bad md5')
}
