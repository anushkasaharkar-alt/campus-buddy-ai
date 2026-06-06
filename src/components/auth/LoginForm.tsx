import { useState } from 'react'
import { Eye, EyeOff, Lock, User, Fingerprint, Smartphone } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { validateUsername, validatePassword } from '@/utils/validators'
import toast from 'react-hot-toast'

interface LoginFormProps {
  onSwitch?: (tab: string) => void
}

export default function LoginForm({ onSwitch }: LoginFormProps) {
  const [username, setUsername] = useState('student001')
  const [password, setPassword] = useState('student123')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const { login, setRememberMe: setRememberMeStore } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateUsername(username)) {
      toast.error('Invalid username format')
      return
    }

    const { valid, errors } = validatePassword(password)
    if (!valid) {
      toast.error(errors[0])
      return
    }

    setLoading(true)
    try {
      await login(username, password)
      setRememberMeStore(rememberMe)
      toast.success('Login successful!')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Input */}
        <div className="relative">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Username or Email
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="input-field pl-10"
              disabled={loading}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="relative">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input-field pl-10 pr-10"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300"
              disabled={loading}
            />
            <span className="text-slate-600 dark:text-slate-400">Remember me</span>
          </label>
          <button
            type="button"
            onClick={() => onSwitch?.('forgot')}
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
            disabled={loading}
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-3 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {/* Demo Credentials */}
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 text-xs text-slate-600 dark:text-slate-300">
          <p className="font-semibold mb-2">📝 Demo Credentials:</p>
          <p>Student: student001 / student123</p>
          <p>Teacher: teacher001 / teacher123</p>
          <p>Canteen: canteen001 / canteen123</p>
        </div>
      </form>

      {/* Biometric Options */}
      <div className="mt-6 space-y-2">
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">Or login with</p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => onSwitch?.('face')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            disabled={loading}
          >
            <Smartphone className="w-5 h-5" />
            <span>Face ID</span>
          </button>
          <button
            onClick={() => onSwitch?.('fingerprint')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            disabled={loading}
          >
            <Fingerprint className="w-5 h-5" />
            <span>Fingerprint</span>
          </button>
        </div>
      </div>
    </div>
  )
}
