import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-[#2c2c2c] ">
        <Sidebar />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
