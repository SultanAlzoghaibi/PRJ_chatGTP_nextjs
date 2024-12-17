"use client";

import Image from "next/image";
import Link from "next/link";

export const Homepage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl font-bold flex flex-col items-center gap-2 mb-6">
        This site is my ChatGPT replica
        <div className="flex items-center gap-2">
          <span>built with</span>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            className="dark:invert"
            priority
          />
        </div>
      </h1>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative z-10">
        <div className="flex flex-col gap-6 items-center sm:items-start text-center">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
            This Next.js project is a simple ChatGPT-like replica, created not by strictly following a tutorial but by experimenting and learning core features of Next.js such as routing, server-side rendering (SSR), APIs, and more. The app demonstrates how these features come together in a real-world application.
          </p>

          {/* Button */}
          <Link
            href="/chat"
            className="inline-block px-6 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg border-2 border-blue-500 shadow-md hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all duration-300"
          >
            Start Chat
          </Link>
        </div>
      </main>
    </div>
  );
}