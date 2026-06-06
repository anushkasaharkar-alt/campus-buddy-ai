export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatTime = (date: Date): string => {
  return new Date(date).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const getAttendanceColor = (percentage: number): string => {
  if (percentage >= 75) return 'text-green-600'
  if (percentage >= 50) return 'text-yellow-600'
  return 'text-red-600'
}

export const getGrade = (marks: number, maxMarks: number): string => {
  const percentage = (marks / maxMarks) * 100
  if (percentage >= 90) return 'A+'
  if (percentage >= 80) return 'A'
  if (percentage >= 70) return 'B+'
  if (percentage >= 60) return 'B'
  if (percentage >= 50) return 'C'
  return 'F'
}

export const truncateText = (text: string, length: number): string => {
  return text.length > length ? text.substring(0, length) + '...' : text
}

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
