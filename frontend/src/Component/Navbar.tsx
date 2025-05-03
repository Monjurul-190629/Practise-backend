'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            <Link href="/">MyApp</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
            <Link href="/register" className="text-gray-700 hover:text-blue-600 font-medium">Register</Link>
            <Link href="/order" className="text-gray-700 hover:text-blue-600 font-medium">Order</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <Link href="/login" className="block py-2 text-gray-700 hover:text-blue-600">Login</Link>
          <Link href="/register" className="block py-2 text-gray-700 hover:text-blue-600">Register</Link>
          <Link href="/order" className="block py-2 text-gray-700 hover:text-blue-600">Order</Link>
        </div>
      )}
    </nav>
  );
}
