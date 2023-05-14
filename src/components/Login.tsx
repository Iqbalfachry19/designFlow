'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
function Login() {
  return (
    <li
      className="cursor-pointer"
      onClick={() => signIn('github', { callbackUrl: '/files/recent' })}
    >
      Log in
    </li>
  );
}

export default Login;
