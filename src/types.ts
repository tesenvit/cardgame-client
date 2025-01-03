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

export type ModalDialogProps = {
  title: string,
  show: boolean,
  width?: number,
  hideDefaultActions?: boolean,
  clickOutsideClose?: boolean
}

export type ToastOptions = {
  color?: string,
  timeout?: number,
}
