// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ezhilarasan Portfolio',
  description: 'Ezhilarasan Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white p-4 shadow-md">
            <nav className="container mx-auto">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Ezhilarasan</h1>
                <ul className="flex space-x-6">
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
            </nav>
          </header>
          
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          
          <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
              <p>© {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}