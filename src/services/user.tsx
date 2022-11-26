import { UserType } from '~/@types/user'

import { api } from './api'

export const getUserByUserName = async (userName = 'borgesizadora') => {
  const response = await api.get(`/users/${userName}`)
  return response.data as UserType
}
