'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-between items-center bg-[#111111] p-4">
      {/* Left Section */}
      <div className="flex gap-4">
        <Link
          href="/"
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            pathname === "/" ? "bg-blue-700 text-white" : "bg-blue-900 text-white hover:bg-blue-700"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            pathname === "/about" ? "bg-blue-700 text-white" : "bg-blue-900 text-white hover:bg-blue-700"
          }`}
        >
          About this site
        </Link>
        <Link
          href="/chat/1"
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            pathname === "/chat/1" ? "bg-blue-700 text-white" : "bg-blue-900 text-white hover:bg-blue-700"
          }`}
        >
          Chat
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex gap-4">
        <Link
          href="/login"
          className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md transition-all duration-300 ${
            pathname === "/login" ? "bg-blue-700 text-white" : "bg-blue-900 text-white hover:bg-blue-700"
          }`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md transition-all duration-300 ${
            pathname === "/register" ? "bg-blue-700 text-white" : "bg-blue-900 text-white hover:bg-blue-700"
          }`}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};