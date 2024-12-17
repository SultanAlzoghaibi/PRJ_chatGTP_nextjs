
"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold">Counter</h1>
      <button className="bg-black/[.08] dark:bg-white/[.08] px-4 py-2 rounded" onClick={increment}>
        Increment
      </button>
      <p className="text-center text-2xl font-bold">{count}</p>
    </div>
  );
}