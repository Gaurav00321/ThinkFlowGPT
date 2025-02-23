"use client";
import React, { useState, useRef, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, User, Bot, LogIn, Share2 } from "lucide-react";

// ✅ Fixed missing prop type definition for GlassButton
interface GlassButtonProps {
  label: string;
  icon: React.ElementType;
}

const GlassButton: React.FC<GlassButtonProps> = ({ label, icon: Icon }) => {
  return (
    <button className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <Icon size={18} />
      <span className="ml-2 font-medium">{label}</span>
    </button>
  );
};

export function SidebarDrawer() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <IconBrandTabler className="icon" />,
    },
    { label: "Profile", href: "#", icon: <IconUserBolt className="icon" /> },
    { label: "Settings", href: "#", icon: <IconSettings className="icon" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="icon" /> },
  ];

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-[rgba(11,19,34,1)] backdrop-blur-sm rounded-2xl border-gray-700">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-scroll-hide">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <SidebarLink
            link={{
              label: "Manu Arora",
              href: "#",
              icon: (
                <Image
                  src="https://assets.aceternity.com/manu.png"
                  className="h-7 w-7 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </SidebarBody>
      </Sidebar>
      <MainChatSection />
    </div>
  );
}

export const Logo: React.FC = () => (
  <Link href="#" className="flex space-x-2 items-center text-sm py-1">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
    <motion.span className="text-lg text-black dark:text-white">
      ThinkFlowGPT
    </motion.span>
  </Link>
);

export const LogoIcon: React.FC = () => (
  <Link href="#" className="flex space-x-2 items-center text-sm py-1">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
  </Link>
);

interface Message {
  text: string;
  sender: "user" | "bot";
}

export function MainChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const isCodeRequest = /code|function|script|snippet|program|write/i.test(
        input
      );

      const botResponse = isCodeRequest
        ? `<pre><code>${data.reply}</code></pre>`
        : data.reply;

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("API Error:", error); // ✅ Logs error to console
      setMessages((prev) => [
        ...prev,
        { text: "Error fetching response. Please try again.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-b from-black via-gray-950 to-black rounded-3xl text-white">
      <div className="flex justify-between items-center px-6 py-2 bg-[rgba(11,19,34,1)] backdrop-blur-sm rounded-2xl border-gray-700 shadow-md">
        <Link href={"/"}>
          <h1 className="p-2 ml-4 text-xl font-semibold text-gray-300">
            ThinkFlowGPT
          </h1>
        </Link>
        <div className="flex gap-4">
          <GlassButton label="Sign In" icon={LogIn} />
          <GlassButton label="Share" icon={Share2} />
        </div>
      </div>

      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide flex flex-col items-center"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`w-full max-w-2xl flex flex-col ${
              msg.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            {/* Sender Icon (Above the Bubble) */}
            <div className="flex items-center gap-2 mb-1">
              {msg.sender === "bot" ? (
                <Bot size={20} className="text-gray-400" />
              ) : (
                <User size={20} className="text-gray-400" />
              )}
              <span className="text-sm text-gray-500">
                {msg.sender === "bot" ? "Bot" : "You"}
              </span>
            </div>

            {/* Message Bubble */}
            <div
              className={`relative p-3 min-w-[50px] max-w-2xl md:max-w-md lg:max-w-3xl rounded-xl shadow-sm transition-all 
        ${
          msg.sender === "user"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-200"
        }
      `}
            >
              {msg.text &&
              typeof msg.text === "string" &&
              msg.text.startsWith("<pre><code>") ? (
                <div
                  className="bg-gray-900 text-white font-mono p-2 rounded-md overflow-x-auto w-2xl"
                  style={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    scrollbarWidth: "none", // Firefox
                    msOverflowStyle: "none", // Internet Explorer/Edge
                  }}
                >
                  <pre className="whitespace-pre-wrap">
                    <code dangerouslySetInnerHTML={{ __html: msg.text }} />
                  </pre>
                </div>
              ) : (
                <p>{msg.text || "No message available"}</p> // Fallback for undefined msg.text
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input (Centered) */}
      <div className="relative bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4">
        <div className="flex bg-gray-800 rounded-full px-4 py-2 shadow-md">
          <input
            className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            type="text"
            placeholder="Message ThinkFlowGPT..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 
                      rounded-full p-2 text-white ml-2 transition-all shadow-md active:scale-95"
          >
            <Send size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
