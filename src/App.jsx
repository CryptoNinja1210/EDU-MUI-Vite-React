import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Courses from './pages/courses'
import AboutUs from './pages/aboutUs'
import ContactUs from './pages/contactUs'
import Instructor from './pages/instructor'
import Student from './pages/student'
import Dashboard from './pages/dashboard/student/index'
import MyCourse from './pages/dashboard/student/courses/myCourse'
import ActiveCourse from './pages/dashboard/student/courses/activeCourse'
import CompletedCourse from './pages/dashboard/student/courses/completedCourse'
import CourseProgress from './pages/dashboard/student/courses/courseProgress'
import CourseRating from './pages/dashboard/student/courses/courseRating'
import WishList from './pages/dashboard/student/wishList'
import Reviews from './pages/dashboard/student/reviews'
import Certificates from './pages/dashboard/student/cerificates'
import Quiz from './pages/dashboard/student/quiz'
import Discussion from './pages/dashboard/student/discussion'
import QuestionAnswer from './pages/dashboard/student/questionAnswer'
import InstructorDashboard from './pages/dashboard/instructor/index'
import ChatRoom from './pages/dashboard/instructor/chatRoom'
import Announcement from './pages/dashboard/instructor/announcement'
import TotalEarning from './pages/dashboard/instructor/totalEarning'
import CourseCreate from './pages/dashboard/instructor/courses/create'
import CourseStatistics from './pages/dashboard/instructor/courses/statistics'
import CourseTutor from './pages/dashboard/instructor/courses/tutor'
import Admin from './pages/dashboard/admin'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/courses" element={<Courses />} />
        <Route  path="/about-us" element={<AboutUs />} />
        <Route  path="/contact-us" element={<ContactUs />} />
        <Route  path="/instructor" element={<Instructor />} />
        <Route  path="/student" element={<Student />} />
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route  path="/dashboard/my-course" element={<MyCourse />} />
        <Route  path="/dashboard/active-course" element={<ActiveCourse />} />
        <Route  path="/dashboard/completed-course" element={<CompletedCourse />} />
        <Route  path="/dashboard/course-progress" element={<CourseProgress />} />
        <Route  path="/dashboard/description/review/rating" element={<CourseRating />} />
        <Route  path="/dashboard/wishlist" element={<WishList />} />
        <Route  path="/dashboard/reviews" element={<Reviews />} />
        <Route  path="/dashboard/certificates" element={<Certificates />} />
        <Route  path="/dashboard/quiz" element={<Quiz />} />
        <Route  path="/dashboard/discussion" element={<Discussion />} />
        <Route  path="/dashboard/question&answer" element={<QuestionAnswer />} />
        <Route  path="/dashboard/instructor-dashboard" element={<InstructorDashboard />} />
        <Route  path="/dashboard/instructor/announcements" element={<Announcement />} />
        <Route  path="/dashboard/chat-room" element={<ChatRoom />} />
        <Route  path="/dashboard/total-earning" element={<TotalEarning />} />
        <Route  path="/dashboard/course-create" element={<CourseCreate />} />
        <Route  path="/dashboard/course-tutor" element={<CourseTutor />} />
        <Route  path="/dashboard/course-statistics" element={<CourseStatistics />} />
        <Route  path="/dashboard/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
