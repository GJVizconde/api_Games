import express from 'express'
import morgan from 'morgan'
import mainRouter from './routes/router'

const app = express()

app.use(morgan('dev'))

app.use('/api', mainRouter)

export default app
