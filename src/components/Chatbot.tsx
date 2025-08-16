'use client';

import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline';

type Message = {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm Evando's AI assistant. Ask me anything about his skills, projects, or experience!",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText.trim(),
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputText.trim(),
                    context: `You are Evando's AI assistant. Evando is a full-stack developer with expertise in:
          - Frontend: React, Next.js, TypeScript, HTML, CSS, Bootstrap
          - Backend: Node.js, PHP (CakePHP), Python, C++
          - Databases: MySQL, PostgreSQL, MongoDB, Supabase
          - Cloud & DevOps: Google Cloud, Vercel, cPanel, Apache
          - Tools: Git, Postman, RESTful APIs
          - Specialization: AI automations, Web Development
          - Prototyping: Figma, Balsamiq, Lucidchart
          - AI: OpenAI, Scraping, CSV, Chart.js
          - CMS: Supabase, WordPress, PHP, HTML, CSS, JavaScript

          Current projects include:
          - Restaurant POS Web app (in progress)
          - Fitness Booking App (undeployed) - CakePHP backend, FullCalendar, CMS
          - Review Analyzer (deployed)
          
          Professional Experience:
          - Fitness Booking App for a fitness coach and his clients
          - Webmaster for Indonesian organization during university year, includes maintaining and updating the website. Revamped the website to be more user-friendly and responsive.
          IMPORTANT: If anyone asks about Evando's age, personal details, or private information, politely decline and say "I'm not allowed to answer that question. Is there something about my skills, projects, or professional experience I can help you with instead?"
          
          Keep responses friendly, concise, and focused on Evando's skills and experience.`
                })
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data.response,
                isUser: false,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "Sorry, I'm having trouble connecting right now. Please try again later!",
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Open chat"
            >
                {isOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                ) : (
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                        {/* Speech bubble */}
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        {/* Robot head */}
                        <rect x="7" y="5" width="10" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        {/* Robot eyes */}
                        <circle cx="9.5" cy="8" r="1" fill="currentColor" />
                        <circle cx="14.5" cy="8" r="1" fill="currentColor" />
                        {/* Robot mouth */}
                        <rect x="10" y="12" width="4" height="1" rx="0.5" fill="currentColor" />
                        {/* Robot antenna */}
                        <rect x="11.5" y="3" width="1" height="2" fill="currentColor" />
                        <circle cx="12" cy="3" r="0.5" fill="white" />
                    </svg>
                )}
            </button>

            {/* Chat Interface */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-40 h-96 w-80 rounded-lg border border-gray-200 bg-white shadow-xl transition-all dark:border-gray-700 dark:bg-gray-800 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700 flex-shrink-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                            Chat with Evando&apos;s AI
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: 'calc(24rem - 8rem)' }}>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs rounded-lg px-3 py-2 text-sm break-words ${message.isUser
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                        }`}
                                    style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-700">
                                    <div className="flex space-x-1">
                                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 dark:border-gray-700 flex-shrink-0">
                        <div className="flex space-x-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim() || isLoading}
                                className="rounded-lg bg-blue-600 px-3 py-2 text-white transition-colors hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                <PaperAirplaneIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
} 