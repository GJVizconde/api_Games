import app from './src/app'
import { PORT } from './src/config'

const port = PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
