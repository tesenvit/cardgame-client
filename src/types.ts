export type ValidationError = {
  path: string,
  message: string,
  code: string
}

export type ValidationErrorResponse = {
  type: 'error' | 'success' | 'result',
  reason: string,
  errors: ValidationError[]
}
