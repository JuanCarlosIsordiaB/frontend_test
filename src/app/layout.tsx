import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css"; // Importa Tailwind CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Washer Page",
  description: "Washer Page - Log in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        // 
        <div className="min-h-screen flex flex-col-reverse md:flex-row"> 
          <aside className="bg-emerald-300 h-20 md:h-screen md:w-1/3  md:sticky md:top-0 md:left-0 flex flex-col justify-center items-center  order-last md:order-first">
            
            <h2 className="mb-2">Logo</h2> 
            <h3 className="text-center ">
              India first waterless
              <span className="block">car cleaning company</span>
            </h3>
          </aside>
          <main className="flex-grow md:w-2/3 md:order-2">{children}</main>
        </div>
      </body>
    </html>
  );
}
