require('dotenv').config()

import server from './server'
import routes from './routes'

import database from './configs/database'

const port = process.env.SERVER_PORT || 3000
const address = process.env.SERVER_ADDRESS || '192.168.1.11'

// Initialization
database.start()
server.create(routes)

// Run
server.start(address, port)