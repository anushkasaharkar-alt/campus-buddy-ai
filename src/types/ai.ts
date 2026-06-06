export interface ChatMessage {
  id: string
  sender: 'user' | 'assistant'
  content: string
  timestamp: Date
  attachments?: string[]
}

export interface ChatConversation {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: Date
  updatedAt: Date
}

export interface SmartRecommendation {
  type: 'study' | 'exam' | 'attendance' | 'course'
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  actionUrl?: string
}

export interface VoiceCommand {
  command: string
  action: string
  parameters?: Record<string, any>
}
