import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-[#0a0e1a] p-4">
      {/* Left Section */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-blue-900 text-white px-4 py-2 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-all"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="bg-blue-900 text-white px-4 py-2 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-all"
        >
          About this site
        </Link>
        <Link
          href="/chat/1"
          className="bg-blue-900 text-white px-4 py-2 text-sm font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-all"
        >
          Chat
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-900 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-all duration-300"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-blue-900 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-all duration-300"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};