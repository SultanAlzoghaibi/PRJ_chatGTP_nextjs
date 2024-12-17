import React from "react";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
            <div>
            <h1 className="text-blue-500 text-center"> chat [id] layout </h1>
            {children}
        </div>
      
    );
}
