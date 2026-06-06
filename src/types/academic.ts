export interface Timetable {
  id: string
  day: string
  sessions: Session[]
}

export interface Session {
  id: string
  startTime: string
  endTime: string
  subject: string
  faculty: string
  room: string
  type: 'lecture' | 'lab' | 'tutorial'
}

export interface AttendanceRecord {
  id: string
  date: Date
  subject: string
  status: 'present' | 'absent' | 'leave'
  markedBy: string
}

export interface InternalMarks {
  id: string
  subject: string
  marks: number
  maxMarks: number
  date: Date
}

export interface ExamResult {
  id: string
  examName: string
  subject: string
  marks: number
  maxMarks: number
  percentage: number
  grade: string
  date: Date
}

export interface Note {
  id: string
  title: string
  subject: string
  fileUrl: string
  uploadedBy: string
  uploadedDate: Date
  downloads: number
}

export interface Assignment {
  id: string
  title: string
  subject: string
  description: string
  dueDate: Date
  submissionUrl?: string
  submittedDate?: Date
  status: 'pending' | 'submitted' | 'graded'
  marks?: number
}
