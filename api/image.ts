import { NowRequest, NowResponse } from '@vercel/node'
import fs from 'fs'
import withCheckMD5 from '../lib/withCheckMD5'
import allowCors from '../lib/allowCors'
import path from 'path'
import Alea from 'alea'
import { compose, replace } from 'ramda'

const replaceSize = (size: number | string, image: string) =>
  replace(/width="\d*.+px"/g, `width="${size}px" height="${size}px"`, image)

const imageEndpoint = (req: NowRequest, res: NowResponse): void => {
  const { md5email, size } = req.query
  const seededRandom = Alea(md5email)
  const intSize = parseInt(size, 10) || 96
  const imagePath = path.join(
    __dirname,
    `../profile-vectors/dog-${Math.floor(seededRandom() * 30)}.svg`
  )
  const image = fs.readFileSync(imagePath, 'utf8')

  res.setHeader('content-type', 'image/svg+xml')
  res.send(replaceSize(intSize, image))
  return
}

export default compose(withCheckMD5, allowCors)(imageEndpoint)
