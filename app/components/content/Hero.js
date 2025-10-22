import Link from 'next/link';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Learn Without Limits
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Join thousands of students learning from expert instructors in our comprehensive Learning Management System
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-lg opacity-90">Active Students</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-lg opacity-90">Expert Instructors</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <div className="text-3xl font-bold mb-2">1,200+</div>
            <div className="text-lg opacity-90">Courses Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}