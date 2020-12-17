import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookie from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'
import http from 'http'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import swagger from './configs/swagger'

let server

function create (routes) {
  const app = express()

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

  app.use(cors({ origin: `http://localhost:3001` /*, credentials: true */ })) // Credentials c'est lorsque tu as besoin d'avoir une auth.
  app.use(cookie())
  app.use(express.json())
  app.use('/public',express.static('public'));
  app.use(compression())
  app.use(helmet())

  app.disable('x-powered-by')

  const specs = swaggerJsdoc(swagger)

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: false })
  )

  routes(app)

  server = http.createServer(app)
}

function start (address, port) {
  server.listen(port, address, () =>
    console.log(`Running on http://${address}:${port}`)
  )
}

export default {
  create,
  start
}