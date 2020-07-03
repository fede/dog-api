import { NowRequest, NowResponse } from '@vercel/node'
import foods from '../lib/foods'
import Alea from 'alea'
import withCheckMD5 from '../lib/withCheckMD5'
import allowCors from '../lib/allowCors'
import withAuth from '../lib/withAuth'
import { compose } from 'ramda'

const privateEndpoint = (req: NowRequest, res: NowResponse): void => {
  const seededRandom = Alea(req.query.md5email)
  res.json({
    darkMode: seededRandom() >= 0.5,
    food: foods[Math.floor(seededRandom() * foods.length + 1)],
  })
  return
}

export default compose(privateEndpoint, allowCors, withAuth, withCheckMD5)
