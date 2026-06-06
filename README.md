# Campus Buddy AI 🎓

> An AI-powered Smart Campus Ecosystem for Modern Education

A comprehensive college management application designed specifically for **G.H. Raisoni College of Engineering and Management, Nagpur**.

## 🌟 Features Overview

### 🔐 Authentication System
- **Three User Roles**: Student, Teacher, Canteen Operator
- **Authentication Methods**:
  - ✅ Username & Password Login
  - ✅ Face Recognition Login
  - ✅ Fingerprint Login
  - ✅ Forgot Password Recovery
  - ✅ Remember Me Functionality
  - ✅ Secure Authentication Protocol

### 👨‍🎓 Student Dashboard

#### Academic Section
- Daily & Weekly Timetable
- Subject-wise Attendance Tracking
- Lecture-wise Attendance Records
- Attendance Percentage Dashboard
- Monthly Detention List
- Internal Assessment Marks
- Exam Results & Semester History
- Online Exam Form Submission
- Hall Ticket Download
- Academic Calendar
- Class Notices

#### Notes & Resources
- Notes PDFs
- Study Materials
- Assignments
- Previous Year Question Papers
- Question Banks
- Reference Materials

#### AI Assistant Features
- NLP-based Chatbot
- Voice Assistant
- College-related Q&A
- Timetable Assistance
- Faculty Information
- Exam Information
- Attendance Information
- Campus Navigation Support

#### Faculty Locator
- Search by Name
- Search by Department
- View Cabin Numbers
- View Office Timings
- Department Information
- Direct Navigation to Faculty Cabin

#### Campus Navigation
Interactive college map with navigation to:
- 🏫 Classrooms
- 🔬 Laboratories
- 📚 Library
- 🎭 Auditorium
- 🏢 Principal Office
- 💼 Placement Cell
- 👨‍🏫 Faculty Cabins
- 🍽️ Canteen
- 🏠 Hostel
- ⚽ Sports Facilities

#### Canteen Services
- Canteen Timings
- Today's Special Dish
- Complete Menu
- Item Availability Status
- Item Prices
- Online Food Ordering
- Order Status Tracking
- Ready Order Notifications
- Queue-free Collection

#### Events & Notifications
- Upcoming Events
- Workshops & Seminars
- Placement Drives
- College Announcements
- Real-time Push Notifications

#### Student Profile
- Personal Information
- Academic Information
- Department Information
- Digital Student ID Card

### 👨‍🏫 Teacher Dashboard

#### Academic Management
- Upload Notes & Study Materials
- Upload Assignments
- Upload Question Banks
- Update Timetables
- Publish Exam Timetables

#### Attendance Management
- Mark Daily Attendance
- Edit Attendance Records
- View Attendance Reports
- Generate Attendance Summaries

#### Examination Management
- Upload Internal Marks
- Upload Results
- Manage Assessments

#### Class Communication System
- Official Classroom Channel
- One-way Communication (Teacher → Students)
- Message Sharing
- PDF & Resource Sharing
- Announcement Broadcasting
- Important Update Distribution

#### Faculty Profile
- Department Details
- Assigned Subjects
- Teaching Schedule
- Faculty Information Management

### 🍽️ Canteen Operator Dashboard

#### Menu Management
- Add Food Items
- Remove Food Items
- Update Prices
- Update Availability
- Update Today's Special

#### Order Management
- View Incoming Orders
- Accept/Reject Orders
- Mark as Preparing
- Mark as Ready
- Mark as Completed
- Automatic Student Notifications

#### Analytics
- Daily Orders Count
- Popular Items Analysis
- Daily Revenue
- Weekly Revenue Reports

### 🤖 Advanced AI Features

#### AI Campus Assistant
- NLP-based Intelligent Chatbot
- Voice-enabled Interactions
- Smart Recommendations
- Context-aware Responses

#### Smart Attendance System
- Attendance Risk Alerts
- Detention Prediction
- Detailed Attendance Reports
- Pattern Analysis

#### Smart Academic Assistant
- Personalized Study Recommendations
- Exam Reminders
- Assignment Reminders
- Learning Path Suggestions

#### Smart Navigation Assistant
- Indoor Campus Navigation
- Route Optimization
- Faculty Cabin Guidance
- Real-time Directions

### 🌍 Multilingual Support
- 🇬🇧 English
- 🇮🇳 Hindi
- 🇮🇳 Marathi
- Language Switching Anytime

### 🔔 Notification System
Push notifications for:
- Attendance Updates
- Detention Alerts
- Exam Form Reminders
- Results Announcements
- Timetable Changes
- Events & Workshops
- Assignment Deadlines
- Canteen Order Status

### 🎨 UI/UX Design
- **Modern & Premium Design**
- **Mobile-first Responsive Layout**
- **Smooth Animations & Transitions**
- **Dark Mode & Light Mode**
- **Glassmorphism Design Elements**
- **Blue, Purple & White Color Theme**
- **Accessibility Optimized**
- **Touch-friendly Interface**

## 🛠 Tech Stack

### Frontend
- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Routing
- **Zustand** - State Management
- **Axios** - HTTP Client
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

### Backend (To be integrated)
- Node.js/Express
- MongoDB/PostgreSQL
- JWT Authentication
- WebSocket for Real-time Updates

## 📁 Project Structure

```
campus-buddy-ai/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── FaceRecognition.tsx
│   │   │   ├── FingerprintAuth.tsx
│   │   │   └── ForgotPassword.tsx
│   │   ├── student/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Timetable.tsx
│   │   │   ├── Attendance.tsx
│   │   │   ├── Marks.tsx
│   │   │   ├── Notes.tsx
│   │   │   ├── FacultyLocator.tsx
│   │   │   ├── CampusNavigation.tsx
│   │   │   └── Canteen.tsx
│   │   ├── teacher/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── AttendanceMarking.tsx
│   │   │   ├── UploadMarks.tsx
│   │   │   ├── ClassChannel.tsx
│   │   │   └── ResourceUpload.tsx
│   │   ├── canteen/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── MenuManagement.tsx
│   │   │   ├── OrderManagement.tsx
│   │   │   └── Analytics.tsx
│   │   ├── ai/
│   │   │   ├── ChatBot.tsx
│   │   │   ├── VoiceAssistant.tsx
│   │   │   └── SmartRecommendations.tsx
│   │   └── common/
│   │       ├── Navbar.tsx
│   │       ├── Sidebar.tsx
│   │       ├── ThemeToggle.tsx
│   │       ├── LanguageSelector.tsx
│   │       └── Notifications.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── StudentDashboard.tsx
│   │   ├── TeacherDashboard.tsx
│   │   ├── CanteenDashboard.tsx
│   │   └── NotFound.tsx
│   ├── stores/
│   │   ├── authStore.ts
│   │   ├── userStore.ts
│   │   ├── uiStore.ts
│   │   └── notificationStore.ts
│   ├── types/
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   ├── academic.ts
│   │   ├── canteen.ts
│   │   └── ai.ts
│   ├── utils/
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   ├── validators.ts
│   │   └── helpers.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/anushkasaharkar-alt/campus-buddy-ai.git

# Navigate to project directory
cd campus-buddy-ai

# Install dependencies
npm install

# Start development server
npm run dev

# The application will open at http://localhost:5173
```

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 📱 User Roles & Workflows

### Student Workflow
1. **Login** using credentials/biometrics
2. **View Dashboard** with academic overview
3. **Check Timetable** and Attendance
4. **Access Resources** - Notes, Assignments
5. **Interact with AI Assistant** for queries
6. **Order Food** from canteen
7. **Navigate Campus** using interactive map
8. **Receive Notifications** for updates

### Teacher Workflow
1. **Login** with faculty credentials
2. **Access Dashboard** with management tools
3. **Mark Attendance** for classes
4. **Upload Resources** - Notes, Materials
5. **Upload Marks** and Results
6. **Broadcast Announcements** to class
7. **View Analytics** and Reports

### Canteen Operator Workflow
1. **Login** with canteen credentials
2. **Manage Menu** - Add, Update, Remove items
3. **Accept Orders** from students
4. **Track Order Status** - Preparing, Ready, Completed
5. **Send Notifications** when orders are ready
6. **View Analytics** - Revenue, Popular Items

## 🎯 Key Features Highlights

✨ **AI-Powered Intelligence**
- Natural Language Processing for chatbot
- Predictive analytics for attendance
- Smart recommendations engine
- Voice-enabled assistance

🔒 **Security & Privacy**
- Multi-factor authentication
- Biometric security
- Encrypted data transmission
- Role-based access control

📊 **Analytics & Reporting**
- Real-time dashboards
- Detailed attendance reports
- Academic performance tracking
- Canteen sales analytics

🌐 **Seamless Integration**
- Academic management system
- Communication platform
- Navigation services
- Notification system

## 🔄 API Integration (Coming Soon)

The application will integrate with backend APIs for:
- User authentication
- Academic data management
- Attendance tracking
- Exam management
- Canteen operations
- AI services

## 📝 License

MIT License - See LICENSE file for details

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Developed for **G.H. Raisoni College of Engineering and Management, Nagpur**

For more information, visit: [GHRCE Official Website](https://www.ghrce.raisoni.net/)

---

**Campus Buddy AI** - Making College Life Smarter, Connected, and Efficient! 🚀
