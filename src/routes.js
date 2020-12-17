import version from './controllers/version'
import product from './controllers/product'
import user from './controllers/user'

export default function (app) {
  app.get('/', version.read)
  
  app.post('/users/signup', user.signup)
  app.post('/users/login', user.login)

  app.get('/products', product.all)
  app.get('/products/:name', product.read)
  app.post('/products', product.create)
  app.put('/products/:name', product.edit)
  app.delete('/products/:name', product.del)
}