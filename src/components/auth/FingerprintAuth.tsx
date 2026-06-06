import { useState } from 'react'
import { Fingerprint, X, CheckCircle } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import toast from 'react-hot-toast'

interface FingerprintAuthProps {
  onBack?: () => void
}

export default function FingerprintAuth({ onBack }: FingerprintAuthProps) {
  const [scanning, setScanning] = useState(false)
  const [recognized, setRecognized] = useState(false)
  const { loginWithBiometric } = useAuthStore()

  const handleScan = async () => {
    setScanning(true)
    try {
      // Simulate fingerprint scanning
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setRecognized(true)

      // Simulate authentication
      await new Promise((resolve) => setTimeout(resolve, 1500))
      await loginWithBiometric('fingerprint')
      toast.success('Fingerprint matched! Logging in...')
    } catch (error) {
      toast.error('Fingerprint not recognized. Try again.')
      setRecognized(false)
    } finally {
      setScanning(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4 text-center">
      {/* Fingerprint Scanner Animation */}
      <div className="flex justify-center">
        <div className="relative w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl flex items-center justify-center">
          <div className={`${scanning || recognized ? 'animate-pulse-soft' : ''}`}>
            <Fingerprint className={`w-24 h-24 ${
              recognized ? 'text-green-500' : scanning ? 'text-blue-500' : 'text-slate-400'
            }`} />
          </div>
          {scanning && (
            <div className="absolute inset-0 rounded-3xl border-4 border-blue-400 animate-pulse"></div>
          )}
        </div>
      </div>

      {/* Status Message */}
      <div className="text-center">
        {recognized ? (
          <div className="space-y-2">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <p className="text-lg font-semibold text-green-600 dark:text-green-400">Fingerprint Recognized!</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Authenticating your account...</p>
          </div>
        ) : scanning ? (
          <div className="space-y-2">
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">Scanning Fingerprint...</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Please place your finger on the scanner</p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">Fingerprint Authentication</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Place your finger on the scanner below</p>
          </div>
        )}
      </div>

      {/* Scan Button */}
      <button
        onClick={handleScan}
        disabled={scanning || recognized}
        className="w-full btn-primary py-3 font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Fingerprint className="w-5 h-5" />
        {scanning ? 'Scanning...' : recognized ? 'Authenticated' : 'Start Scan'}
      </button>

      {/* Back Button */}
      <button
        onClick={onBack}
        disabled={scanning}
        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
      >
        <X className="w-5 h-5" />
        Back to Login
      </button>
    </div>
  )
}
