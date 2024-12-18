import { Sidebar } from './components/Sidebar';
import { ChatDisplay } from './components/ChatDisplay';
import { PromptInput } from './components/PromptInput';

export default function ChatPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <h1 className="text-blue-500 text-center">Chat: {id}</h1>
      <div className="grid grid-cols-[250px_1fr] grid-rows-[1fr_auto] min-h-screen bg-gray-900 text-white">
        {/* Left Sidebar */}
        <aside className="bg-[#111111] p-4 border-r border-blue-900 overflow-y-auto h-full">
          <Sidebar />
        </aside>

        {/* Chat Display and Input */}
        <main className="flex flex-col h-full bg-[#111111]">
          {/* Chat Display */}
          <div className="flex-grow overflow-y-auto p-4">
            <ChatDisplay />
          </div>

          {/* Prompt Input (Sticky) */}
          <footer className="p-4 bg-black border-t border-blue-900 sticky bottom-0 left-0 w-full z-10">
            <PromptInput />
          </footer>
        </main>
      </div>
    </div>
  );
}