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
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
      ThinkFlow
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

  // ✅ Explicitly type useRef
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [...prev, generateBotResponse(input)]);
    }, 600);

    setInput("");
  };

  const generateBotResponse = (message: string): Message => {
    const lowerMessage = message.toLowerCase().trim();

    // Math Calculation Handling
    try {
      if (/^[0-9+\-*/().\s]+$/.test(lowerMessage)) {
        const result = eval(lowerMessage); // Safe for basic math expressions
        return { text: `The result is: ${result}`, sender: "bot" };
      }
    } catch {
      return {
        text: "I couldn't compute that. Please check your input.",
        sender: "bot",
      };
    }

    const responses: { [key: string]: string } = {
      hi: "Hello! How can I assist you?",
      hello: "Hey there! Need any help?",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      bye: "Goodbye! Have a great day!",
    };

    for (const key in responses) {
      if (lowerMessage.includes(key)) {
        return { text: responses[key], sender: "bot" };
      }
    }

    return {
      text: "I didn't quite get that. Could you rephrase?",
      sender: "bot",
    };
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-b from-black via-gray-950 to-black rounded-3xl text-white">
      <div className="flex justify-between items-center px-6 py-4 bg-[rgba(11,19,34,1)] backdrop-blur-sm rounded-2xl border-gray-700 shadow-md">
        <Link href={"/"}>
          <h1 className="p-2 ml-4 text-2xl font-semibold text-gray-300">
            ThinkFlow
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
            className={`flex w-full max-w-2xl ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`relative flex items-center gap-2 p-3 max-w-xs md:max-w-md lg:max-w-lg rounded-xl shadow-sm transition-all 
                ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white ml-auto"
                    : "bg-gray-800 text-gray-200 mr-auto"
                }
              `}
              style={{ margin: "0 20px" }} // Adds space on both sides
            >
              {msg.sender === "bot" && (
                <Bot size={18} className="text-gray-400" />
              )}
              <p>{msg.text}</p>
              {msg.sender === "user" && (
                <User size={18} className="text-gray-400" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input (Centered) */}
      <div className="relative bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4">
        <div className="flex bg-gray-800 rounded-full px-4 py-2 shadow-md">
          <input
            className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            type="text"
            placeholder="Message ThinkFlow..."
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
