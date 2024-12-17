import Link from "next/link";

export const Navigation = () => {
    return (

        <nav className="flex flex-row gap-4 justify-center items-center">
  <Link
    href="/"
    className="text-white outline outline-2 outline-blue-500 px-2 py-1 rounded"
  >
    Home
  </Link>
  <Link
    href="/about"
    className="text-white outline outline-2 outline-blue-500 px-2 py-1 rounded"
  >
    About
  </Link>
  <Link
    href="/implimentation"
    className="text-white outline outline-2 outline-blue-500 px-2 py-1 rounded"
  >
    Implementation
  </Link>
  <Link
    href="/chat/1"
    className="text-white outline outline-2 outline-blue-500 px-2 py-1 rounded"
  >
    Chat
  </Link>
  <Link
    href="/login"
    className="text-white outline outline-2 outline-blue-500 px-2 py-1 rounded"
  >
    Login
  </Link>
  <Link
    href="/register"
    className="text-white outline outline-2 outline-blue-500 px-2 py-1 rounded"
  >
    Register
  </Link>
</nav>
    );
}   