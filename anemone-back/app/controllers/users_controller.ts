import UserService from '#services/user_service'
import { registerValidator } from '#validators/register_validator'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return this.userService.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const userData = await request.validateUsing(registerValidator)
    return this.userService.create(userData)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    if (!params.id) {
      response.badRequest({ message: 'Invalid ID parameter' })
    }
    return this.userService.find(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    params
    request
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await this.userService.find(params.id)
    return user.delete()
  }
}
