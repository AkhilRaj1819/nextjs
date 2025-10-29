'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RouteProtection({ children, requiredRole }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Still loading

    if (!session) {
      console.log('[ROUTE PROTECTION] No session found. Redirecting to /signin');
      router.push('/signin');
      return;
    }

    const userRole = session.user?.role;

    if (requiredRole && userRole !== requiredRole) {
      console.log(`[ROUTE PROTECTION] User with role ${userRole} tried to access ${requiredRole} area. Redirecting.`);
      
      if (userRole === 'admin') {
        router.push('/admin-dashboard');
      } else if (userRole === 'student') {
        router.push('/student-dashboard');
      } else {
        router.push('/');
      }
    }
  }, [session, status, router, requiredRole]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  if (requiredRole && session.user?.role !== requiredRole) {
    return null;
  }

  return children;
}