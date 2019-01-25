import dotenv from 'dotenv'

import appRoutes from './routes/approutes'
import apiConfig from './config/apiconfig'

apiConfig.use(appRoutes)

apiConfig.listen(process.env.PORT, (req, res) => {
  console.log(`server running on port ${process.env.PORT}`)
})