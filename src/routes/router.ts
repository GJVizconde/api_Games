import { Router } from 'express'

const mainRouter = Router()

mainRouter.get('/', (_req, res) => {
  res.send('Estoy en mainRouter')
})

export default mainRouter
