import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Flight Booking System',
    default: 'Flight Booking',
  },
  description:
    'This is a basic flight search and booking system that allows users to search for flights, book tickets, and process payments securely.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* HEADER */}
        <header className="p-4 text-white bg-blue-600">
          <h1 className="text-xl text-center">Flight Booking System</h1>
        </header>

        {/* CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="p-4 text-center text-black bg-gray-50">
          <p>&copy; {new Date().getFullYear()} Flight Booking System</p>
        </footer>
      </body>
    </html>
  );
}
