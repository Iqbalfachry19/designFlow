import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38 57"
          className="w-20 h-20"
          aria-label="Homepage"
        >
          <path
            fill="#1abcfe"
            d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
          ></path>
          <path
            fill="#0acf83"
            d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
          ></path>
          <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"></path>
          <path
            fill="#f24e1e"
            d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
          ></path>
          <path
            fill="#a259ff"
            d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
          ></path>
        </svg>
        <nav>
          <ul className="flex space-x-2">
            <li>Products</li>
            <li>Enterprise</li>
            <li>Pricing</li>
            <li>Community</li>
            <li>Company</li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
