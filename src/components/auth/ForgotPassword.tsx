import { useState } from 'react'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'
import { validateEmail } from '@/utils/validators'
import toast from 'react-hot-toast'

interface ForgotPasswordProps {
  onBack?: () => void
}

export default function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      toast.success('Recovery email sent! Check your inbox.')
    } catch (error) {
      toast.error('Failed to send recovery email')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-6">
            <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Check Your Email</h2>
          <p className="text-slate-600 dark:text-slate-400">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-sm text-left">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Next steps:</p>
          <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400">
            <li>Check your email inbox</li>
            <li>Click the password reset link</li>
            <li>Create a new password</li>
            <li>Log in with your new password</li>
          </ol>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          Didn't receive the email? Check your spam folder or wait a few minutes.
        </p>

        <button
          onClick={onBack}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Login
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Reset Password</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@ghrce.ac.in"
              className="input-field pl-10"
              disabled={loading}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-3 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <button
        onClick={onBack}
        disabled={loading}
        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Login
      </button>
    </div>
  )
}
