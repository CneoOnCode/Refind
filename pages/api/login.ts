// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'POST' || req.method == 'post') {
    const data: Object = req.body.username
  }
  res.status(200).json({ name: 'John Doe' })
}
