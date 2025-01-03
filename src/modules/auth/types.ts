export type LoginFormData = {
  email: string,
  password: string
}

export type LoginResponse = {
  result: {
    access_token: string
  }
}

export type RegisterFormData = {
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}