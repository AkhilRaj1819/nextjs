import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LMS Platform</h3>
            <p className="text-gray-300">
              Empowering learners worldwide with quality education and innovative learning experiences.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">support@lmsplatform.com</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
          <p>&copy; 2024 LMS Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}