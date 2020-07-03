import { NowResponse, NowRequest } from '@vercel/node'
import { test } from 'ramda'

const MD5test = test(/^[a-f0-9]{32}$/i)

export default (apiFn) => (req: NowRequest, res: NowResponse) => {
  return MD5test(req.query.md5email)
    ? apiFn(req, res)
    : res.status(400).send('Bad md5')
}
