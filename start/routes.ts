/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/posts', '#controllers/posts_controller.index')
router.get('/posts/create', '#controllers/posts_controller.create')
router.get('/posts/:id', '#controllers/posts_controller.show')
router.get('/posts/:id/edit', '#controllers/posts_controller.edit')
router.put('/posts/:id', '#controllers/posts_controller.update')
router.post('/posts', '#controllers/posts_controller.store')
