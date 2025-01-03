import { ref } from 'vue'
import type { ValidationError } from '@/types'

export default () => {
  const errors  = ref<ValidationError[]>([])

  const set = (fieldErrors: ValidationError[]): void => {
    errors.value = fieldErrors
  }

  const getMessage = (field: string): string => {
    const error: ValidationError | undefined = errors.value.find(error => error.path === field)
    return error?.message || ''
  }

  const clear = (): void => {
    errors.value = []
  }

  return {
    getMessage,
    clear,
    set
  }
}