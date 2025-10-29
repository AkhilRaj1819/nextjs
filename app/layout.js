import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import connectToDatabase from '../utils/mongodb';
import User from './models/User';
import SessionProvider from './components/SessionProvider';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LMS Platform",
  description: "Learning Management System built with Next.js",
};

export default async function RootLayout({ children }) {
  try {
    const connection = await connectToDatabase();
    if (connection) {
      console.log('✅ MongoDB connection established');
      console.log('✅ User model loaded successfully:', !!User);
    }
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </SessionProvider>
      </body>
    </html>
  );
}
