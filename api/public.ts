import { NowRequest, NowResponse } from '@vercel/node'
import names from '../lib/names'
import Alea from 'alea'
import withCheckMD5 from '../lib/withCheckMD5'
import allowCors from '../lib/allowCors'
import { compose } from 'ramda'

const publicEndpoint = (req: NowRequest, res: NowResponse): void => {
  const seededRandom = Alea(req.query.md5email)
  const age = Math.floor(seededRandom() * 20)
  const name = names[Math.floor(seededRandom() * names.length + 1)]
  res.json({
    name,
    age,
  })
  return
}

export default compose(withCheckMD5, allowCors)(publicEndpoint)
