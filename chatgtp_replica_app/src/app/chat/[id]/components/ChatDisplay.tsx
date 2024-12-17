
export const ChatDisplay = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="bg-gray-900 p-3 rounded max-w-md self-start">
          Hello! How can I assist you today?
        </div>
        <div className="bg-blue-900 p-3 rounded max-w-md self-end">
          Can you explain Next.js layouts?
        </div>
        <div className="bg-gray-900 p-3 rounded max-w-md self-start">
          Sure! Next.js layouts allow you to create reusable UI structures.
        </div>
      </div>
    );
  }