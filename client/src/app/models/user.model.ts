import { IUser } from './user.interface'

export class User implements IUser {
  id: number
  name: string

  constructor(user: IUser) {
    this.id = user.id
    this.name = user.name
  }
}
