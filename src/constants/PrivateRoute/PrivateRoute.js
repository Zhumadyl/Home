// components/PrivateRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function PrivateRoute({ children }) {
  const router = useRouter();
  const isAuthenticated = true; // Replace with your authentication logic

  useEffect(() => {
    // Use router.push inside a useEffect to ensure it runs on the client side
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return children;
}

export default PrivateRoute;
