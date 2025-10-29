import Navbar from '../components/layout/navbar';
import Card from '../components/global/card';
import Button from '../components/global/button';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-semibold mb-2">JavaScript Fundamentals</h3>
            <p className="text-gray-600 mb-4">Learn the basics of JavaScript programming</p>
            <Button>Continue Learning</Button>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold mb-2">React Development</h3>
            <p className="text-gray-600 mb-4">Build modern web applications with React</p>
            <Button>Continue Learning</Button>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold mb-2">Node.js Backend</h3>
            <p className="text-gray-600 mb-4">Create server-side applications with Node.js</p>
            <Button>Enroll Now</Button>
          </Card>
        </div>
      </div>
    </>
  );
}