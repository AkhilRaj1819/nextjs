"use client";
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Card from '../global/card';

const StudentDashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user?.role !== "student") {
      router.replace("/signin");
    }
  }, [session, status, router]);

  console.log('Student dashboard access - Session user:', session?.user); // Submission requirement

  if (status === "loading" || !session || session.user?.role !== "student") {
    return <div className="text-center mt-10 text-black">Loading...</div>;
  }

  return (
  <MainLayout 
    sidebar={<Sidebar role="student" />} 
    navbar={<Navbar />}
    footer={<Footer />}
  >
    <h1 className="text-3xl font-bold mb-6 text-black">Student Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Welcome!</h2>
        <p className='text-black'>This is your student dashboard. Here you can find your enrolled courses, grades, and profile information.</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">My Courses</h2>
        <p className="text-3xl font-bold text-blue-600 mb-2">3</p>
        <p className='text-gray-600'>Currently enrolled courses</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Completed</h2>
        <p className="text-3xl font-bold text-green-600 mb-2">12</p>
        <p className='text-gray-600'>Courses completed</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Current Grade</h2>
        <p className="text-3xl font-bold text-purple-600 mb-2">A-</p>
        <p className='text-gray-600'>Overall performance</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Study Hours</h2>
        <p className="text-3xl font-bold text-orange-600 mb-2">47</p>
        <p className='text-gray-600'>This month</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Certificates</h2>
        <p className="text-3xl font-bold text-red-600 mb-2">8</p>
        <p className='text-gray-600'>Earned certificates</p>
      </Card>
    </div>
    
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-black">Recent Activity</h2>
      <Card>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-black">Completed lesson: "React Hooks"</span>
            <span className="text-gray-500 text-sm">1 hour ago</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-black">Submitted assignment: "JavaScript Project"</span>
            <span className="text-gray-500 text-sm">3 hours ago</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-black">Started new course: "Node.js Fundamentals"</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-black">Earned certificate: "HTML & CSS Basics"</span>
            <span className="text-gray-500 text-sm">3 days ago</span>
          </div>
        </div>
      </Card>
    </div>
    
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-black">Current Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-black mb-2">JavaScript Fundamentals</h3>
          <p className="text-gray-600 mb-3">Progress: 75% complete</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
          <p className="text-sm text-gray-500">Next: Functions and Scope</p>
        </Card>
        
        <Card>
          <h3 className="text-lg font-semibold text-black mb-2">React Development</h3>
          <p className="text-gray-600 mb-3">Progress: 45% complete</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
          </div>
          <p className="text-sm text-gray-500">Next: State Management</p>
        </Card>
      </div>
    </div>
  </MainLayout>
  );
};

export default StudentDashboardPage;