import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import CanteenDashboard from './pages/CanteenDashboard'
import NotFound from './pages/NotFound'

function App() {
  const { user } = useAuthStore()

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {user?.role === 'student' && (
            <Route path="/*" element={<StudentDashboard />} />
          )}
          
          {user?.role === 'teacher' && (
            <Route path="/*" element={<TeacherDashboard />} />
          )}
          
          {user?.role === 'canteen' && (
            <Route path="/*" element={<CanteenDashboard />} />
          )}
          
          {!user && <Route path="/" element={<Navigate to="/login" />} />}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </>
  )
}

export default App
