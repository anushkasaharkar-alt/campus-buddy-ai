export type UserRole = 'student' | 'teacher' | 'canteen'

export interface LoginCredentials {
  username: string
  password: string
}

export interface BiometricAuth {
  type: 'face' | 'fingerprint'
  userId?: string
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  newPassword: string
}
