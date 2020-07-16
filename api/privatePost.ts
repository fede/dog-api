import { NowRequest, NowResponse } from '@vercel/node'
import withCheckMD5 from '../lib/withCheckMD5'
import withAuth from '../lib/withAuth'
import { compose } from 'ramda'

const privatePostEndpoint = (req: NowRequest, res: NowResponse): void => {
  res.json({
    message: `Woof ${req.body.message} Woof`,
  })
  return
}

export default compose(withAuth, withCheckMD5)(privatePostEndpoint)
