import { NowRequest, NowResponse } from '@vercel/node'
import marked from 'marked'
import fs from 'fs'
import path from 'path'

export default (req: NowRequest, res: NowResponse): void => {
  const READMEPath = path.join(__dirname, '../README.mdx')
  const readmeContents = fs.readFileSync(READMEPath, 'utf8')
  res.send(marked(readmeContents))
  return
}
