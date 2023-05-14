import Login from '@/components/Login';
import localFont from 'next/font/local';

const inter = localFont({ src: './Whyte-Regular.woff2', display: 'swap' });

export default function Home() {
  return (
    <main className={`flex min-h-screen w-full flex-col ${inter.className} `}>
      <div className="flex pt-6 justify-between px-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38 57"
          className="w-14 h-14"
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
          <ul className="flex space-x-4 items-center">
            <li>
              <span className="flex items-center gap-2">
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </li>
            <li>
              <span className="flex items-center gap-2">
                Enterprise{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </li>
            <li>Pricing</li>
            <li>
              {' '}
              <span className="flex items-center gap-2">
                Community
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </li>
            <li>
              {' '}
              <span className="flex items-center gap-2">
                Company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </li>
            <Login />
            <li className="text-white bg-black px-8 py-2 font-bold rounded-lg">
              Get Started for free
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
