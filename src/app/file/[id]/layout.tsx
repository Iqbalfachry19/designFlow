import Header from "@/components/file/Header";
import LeftSidebar from "@/components/file/LeftSidebar";
import RightSidebar from "@/components/file/RightSidebar";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], weight: "600" });
export const metadata = {
  title: "Recently viewed - DesignFlow",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col bg-[#2c2c2c] overflow-y-hidden  ">
        <Header />
        <div className="w-full flex ">
          <LeftSidebar />
          <div className="flex-1 overflow-y-auto z-0">{children}</div>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
