// import type { HttpContext } from '@adonisjs/core/http'

import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  public async index({ view }: HttpContext) {
    const posts = await Post.all()
    return view.render('posts/index', { posts })
  }

  public async create({ view }: HttpContext) {
    return view.render('posts/create')
  }

  public async show({ params, view }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    return view.render('posts/show', { post })
  }

  public async edit({ params, view }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    return view.render('posts/edit', { post })
  }

  public async update({ params, request, response, session }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    const data = request.only(['title', 'body'])
    post.merge(data)
    await post.save()
    session.flash({ notification: 'Post updated' })
    return response.redirect('/posts')
  }

  public async store({ request, response, session }: HttpContext) {
    const data = request.only(['title', 'body'])
    await Post.create(data)
    session.flash({ notification: 'Post created' })
    return response.redirect('/posts')
  }
}
