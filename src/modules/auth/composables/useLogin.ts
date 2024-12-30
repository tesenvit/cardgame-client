import useHttpClient from '@/composables/useHttpClient'
import type { LoginResponse } from '@/modules/auth/types'

const URL: string = '/api/v1/auth/login'

export default async (email: string, password: string): Promise<string> => {
  try {
    const {result: { access_token: token }} = await useHttpClient.post(URL, { email, password }) as LoginResponse
    localStorage.setItem('accessToken', token)
    return token;
  } catch (error: any) {
    throw error.errors || []
  }
}