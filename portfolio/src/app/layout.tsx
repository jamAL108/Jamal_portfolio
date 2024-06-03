import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar'
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamal Mydeen",
  description: "Jamal Mydeen portfolio site",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/JamalPhoto.jpg',
        href: '/images/JamalPhoto.jpg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/JamalPhoto.jpg',
        href: '/images/JamalPhoto.jpg',
      },
    ],
  },
};



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-[100%] max-w-[100%] !overflow-x-hidden overflow-y-auto flex items-center flex-col">
            <div className="w-[min(1300px,100vw)] flex !overflow-x-hidden ">
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
