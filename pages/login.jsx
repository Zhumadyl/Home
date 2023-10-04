// pages/login.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const isAuthenticated = true;

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/'); // Replace with your desired URL
    }
  }, [isAuthenticated, router]);

  // If the user is authenticated, you can render a message or redirect them immediately
  if (isAuthenticated) {
    return <div>You are already logged in.</div>;
  }

  // Render the login form for unauthenticated users
  return (
    <div>
      <h1>login</h1>
    </div>
  );
}

export default Login;
