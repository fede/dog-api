import { NowResponse, NowRequest } from '@vercel/node'

const AUTH_KEY = 'afbe40f8-e5c6-49ab-bfd6-57eba05ae1a0'

export default (apiFn) => (req: NowRequest, res: NowResponse) => {
  const authToken = req.headers.authorization || req.headers.Authorization
  return authToken === AUTH_KEY
    ? apiFn(req, res)
    : res.status(400).send('Bad auth token')
}
