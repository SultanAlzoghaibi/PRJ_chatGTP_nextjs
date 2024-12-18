export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#111111]">
        <main className="flex flex-col items-center justify-center w-full max-w-5xl px-6 py-8 mx-auto space-y-4">
          <h1 className="text-5xl font-bold text-white tracking-wide">COMING SOON</h1>
          {children}
        </main>
      </div>
    );
  }