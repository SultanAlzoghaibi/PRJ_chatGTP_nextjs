import React from "react";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>
            <h1 className="text-blue-500 text-center"> this is chat page </h1>
            {children}
        </div>
        </div>
    );
}
