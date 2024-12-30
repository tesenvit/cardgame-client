import type { ValidationError } from '@/types'

export default (field: string, errors: ValidationError[]) => {
  const error: ValidationError | undefined = errors.find(error => error.path === field)
  return error ? error.message : ''
}