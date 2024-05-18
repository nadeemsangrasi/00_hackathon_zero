import { Inter } from "next/font/google";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideMenu from "./side-menu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={inter.className}>
        <div className="border-b ">
          <div className="flex h-16 items-center px-4 container mx-auto text-2xl md:text-3xl font-bold">
            <Link href={"/"}>
              <span className="text-[#7effd2]">&lt;Le</span>ns Lega
              <span className="text-[#7effd2]">cy/&gt;</span>
            </Link>

            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/140242307?s=400&u=2a58732b63f4bfc158b2d3c2e4f4f2a771b3db74&v=4"
                  alt="nadeemsangrasi"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex relative w-full">
          <SideMenu />
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
