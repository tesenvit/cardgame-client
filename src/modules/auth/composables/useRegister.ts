import useHttpClient from '@/composables/useHttpClient'
import type { RegisterFormData } from '@/modules/auth/types'

const URL: string = '/api/v1/auth/register'

export default async (data: RegisterFormData): Promise<void> => {
  try {
    await useHttpClient.post(URL, data)
  } catch (error: any) {
    throw error.errors || []
  }
}