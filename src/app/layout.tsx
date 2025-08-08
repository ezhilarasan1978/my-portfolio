// app/layout.tsx
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Ezhilarasan S - Portfolio',
  description: 'Consultant | Full Stack Developer | GIS Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50 text-gray-900`}>
        <div className="min-h-screen flex flex-col">

          {/* Header */}
          <header className="bg-gradient-to-r from-slate-100 via-teal-50 to-slate-100 border-b border-slate-200 shadow-sm">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className="text-2xl font-semibold text-slate-800 hover:text-teal-700 transition-colors"
                >
                  Ezhilarasan S
                </Link>
                <ul className="flex space-x-6 text-slate-600 font-medium">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Contact", href: "/contact" },
                    { label: "Map", href: "/map" }, // Added Map tab
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="relative group hover:text-teal-700 transition-colors"
                      >
                        {item.label}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 py-6 mt-8">
            <div className="container mx-auto text-center text-sm">
              <p className="mb-1">
                © {new Date().getFullYear()} Ezhilarasan S. All rights reserved.
              </p>
              <p className="text-slate-400">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </footer>

        </div>
      </body>
    </html>
  )
}
