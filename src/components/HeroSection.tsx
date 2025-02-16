import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { FormModal } from "./Form-Modal";

function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black rounded-3xl w-full">
      <div className="relative w-full flex items-center justify-center">
        <Navbar />
      </div>

      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="teal"
        />
        <div className="p-4 relative z-1 w-full text-center">
          <h1 className="text-teal-500 mt-20 md:mt-0 antialiased text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Think AI. ThinkFlow.
          </h1>
          <p className="mt-10 text-2xl font-medium md-text-lg text-neutral-300 max-wd-lg mx-auto">
            Your AI-powered assistant for seamless conversations, intelligent
            automation, and enhanced productivity. <br /> From answering complex
            queries to streamlining tasks, ThinkFlow adapts, learns, and
            evolves—making every interaction smarter and more efficient.
          </p>
          <div className="mt-20 flex justify-center space-x-5">
            <Link href={"/Dashboard"}>
              <Button className="px-6 py-3 text-lg">Explore GPT</Button>
            </Link>
            <FormModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
