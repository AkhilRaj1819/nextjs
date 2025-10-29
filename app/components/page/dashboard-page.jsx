"use client"
import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Card from '../global/card';

const DashboardPage = () => (
  <MainLayout 
    sidebar={<Sidebar role="admin" />} 
    navbar={<Navbar />}
    footer={<Footer />}
  >
    <h1 className="text-3xl font-bold mb-6 text-black">Admin Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Welcome!</h2>
        <p className='text-black'>This is your admin dashboard. Here you can find your courses, progress, and more.</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Total Students</h2>
        <p className="text-3xl font-bold text-blue-600 mb-2">1,247</p>
        <p className='text-gray-600'>Active learners on the platform</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Total Courses</h2>
        <p className="text-3xl font-bold text-green-600 mb-2">89</p>
        <p className='text-gray-600'>Available courses</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Revenue</h2>
        <p className="text-3xl font-bold text-purple-600 mb-2">$24,580</p>
        <p className='text-gray-600'>This month's earnings</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Completion Rate</h2>
        <p className="text-3xl font-bold text-orange-600 mb-2">87%</p>
        <p className='text-gray-600'>Average course completion</p>
      </Card>
      
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">New Enrollments</h2>
        <p className="text-3xl font-bold text-red-600 mb-2">156</p>
        <p className='text-gray-600'>This week</p>
      </Card>
    </div>
    
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-black">Recent Activity</h2>
      <Card>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-black">New student enrolled in React Development</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-black">Course "JavaScript Fundamentals" completed by John Doe</span>
            <span className="text-gray-500 text-sm">4 hours ago</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-black">New course "Python for Beginners" published</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-black">System maintenance completed</span>
            <span className="text-gray-500 text-sm">2 days ago</span>
          </div>
        </div>
      </Card>
    </div>
  </MainLayout>
);

export default DashboardPage;