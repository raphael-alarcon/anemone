/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const UsersController = async () => await import('#controllers/users_controller')
const SessionController = async () => await import('#controllers/session_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.resource('users', UsersController).apiOnly()

//#region Session
router.post('/login', [SessionController, 'store'])
router.post('/logout', [SessionController, 'logout']).use(middleware.auth())
router.get('/me', [SessionController, 'me']).use(middleware.auth())
//#endregion
