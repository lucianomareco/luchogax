import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../../src/utils/connection'
import Counter from '../../../src/models/Counter'

dbConnect()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        const c = await Counter.findOne({ })

        if (!c) return res.status(400).json({ error: 'No Response for This Request' })

        res.status(200).json({
          amount: c.amount,
          updatedAt: c.updatedAt
        })
      } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'No Response for This Request' })
      }
      break
    case 'PUT':
      try {
        if (req.body.password !== process.env.PASSWORD) throw new Error('unauthorized user error')
        const c = await Counter.findOneAndUpdate({ }, {
          amount: req.body.amount
        })
        res.status(200).json({
          amount: c.amount
        })
      } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'No Response for This Request' })
      }
      break
    default:
      return res.status(400).json({ msg: 'This method is not supported' })
  }
}
