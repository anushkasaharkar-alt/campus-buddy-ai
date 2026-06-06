export interface Student {
  id: string
  rollNumber: string
  name: string
  email: string
  phone: string
  department: string
  semester: number
  cgpa: number
  attendancePercentage: number
  avatar?: string
}

export interface Teacher {
  id: string
  empId: string
  name: string
  email: string
  phone: string
  department: string
  subjects: string[]
  cabin: string
  officeHours: string
  avatar?: string
}

export interface CanteenOperator {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
}
