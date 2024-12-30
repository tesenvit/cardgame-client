export type LoginFormData = {
  email: string,
  password: string
}

export type LoginResponse = {
  result: {
    access_token: string
  }
}