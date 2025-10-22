import DashboardLayout from '../components/layout/DashboardLayout';
import CourseCard from '../components/content/CourseCard';
import SearchBar from '../components/forms/SearchBar';
import ProgressBar from '../components/content/ProgressBar';

export default function DashboardPage() {
  const enrolledCourses = [
    {
      title: "JavaScript Fundamentals",
      description: "Learn the basics of JavaScript programming",
      instructor: "John Doe",
      duration: "4 weeks",
      progress: 75,
      enrolled: true
    },
    {
      title: "React Development",
      description: "Build modern web applications with React",
      instructor: "Jane Smith",
      duration: "6 weeks",
      progress: 45,
      enrolled: true
    }
  ];

  const availableCourses = [
    {
      title: "Node.js Backend",
      description: "Create server-side applications with Node.js",
      instructor: "Mike Johnson",
      duration: "5 weeks",
      price: 99,
      enrolled: false
    },
    {
      title: "Python for Data Science",
      description: "Learn Python programming for data analysis",
      instructor: "Sarah Wilson",
      duration: "8 weeks",
      price: 149,
      enrolled: false
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, Student!</h1>
          <div className="w-full sm:w-96">
            <SearchBar placeholder="Search your courses..." />
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Enrolled Courses</h3>
            <p className="text-3xl font-bold text-blue-600">{enrolledCourses.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Completed</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Certificates</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
          </div>
        </div>
        
        {/* My Courses */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
        
        {/* Available Courses */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}