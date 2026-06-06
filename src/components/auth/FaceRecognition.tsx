import { useState, useRef, useEffect } from 'react'
import { Camera, X, CheckCircle } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import toast from 'react-hot-toast'
import Webcam from 'react-webcam'

interface FaceRecognitionProps {
  onBack?: () => void
}

export default function FaceRecognition({ onBack }: FaceRecognitionProps) {
  const [capturing, setCapturing] = useState(false)
  const [recognized, setRecognized] = useState(false)
  const [loading, setLoading] = useState(false)
  const webcamRef = useRef<Webcam>(null)
  const { loginWithBiometric } = useAuthStore()

  useEffect(() => {
    // Request camera permissions
    navigator.mediaDevices.getUserMedia({ video: true }).catch(() => {
      toast.error('Camera access denied')
      onBack?.()
    })
  }, [])

  const handleCapture = async () => {
    setLoading(true)
    try {
      // Simulate face recognition
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setCapturing(true)
      setRecognized(true)

      // Simulate authentication
      await new Promise((resolve) => setTimeout(resolve, 1500))
      await loginWithBiometric('face')
      toast.success('Face recognized! Logging in...')
    } catch (error) {
      toast.error('Face recognition failed. Try again.')
      setRecognized(false)
      setCapturing(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
        <Webcam
          ref={webcamRef}
          videoConstraints={{ facingMode: 'user' }}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 border-4 border-blue-400 rounded-full"></div>
        </div>
      </div>

      {recognized && (
        <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="text-green-600 dark:text-green-400 w-6 h-6" />
          <span className="text-green-800 dark:text-green-200 font-semibold">Face recognized successfully!</span>
        </div>
      )}

      <button
        onClick={handleCapture}
        disabled={loading || recognized}
        className="w-full btn-primary py-3 font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Camera className="w-5 h-5" />
        {loading ? 'Recognizing...' : recognized ? 'Authenticated' : 'Capture Face'}
      </button>

      <button
        onClick={onBack}
        disabled={loading}
        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
      >
        <X className="w-5 h-5" />
        Back to Login
      </button>
    </div>
  )
}
