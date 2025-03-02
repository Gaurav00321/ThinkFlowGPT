import { CodeBlockDemo } from "@/components/codeblock";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <div className="p-10 flex justify-around items-center bg-gradient-to-b from-black via-gray-900 to-black w-full">
      {/* Left Section: Heading & CTA */}
      <div className="text-white">
        <h2 className="text-5xl mb-4 font-semibold text-teal-500 antialiased tracking-wide">
          For Students
        </h2>
        <h3 className="mt-2 text-4xl font-bold">Code smarter, not harder.</h3>
        <p className="mt-4 text-gray-400">
          Get AI-driven coding suggestions, real-time debugging, and
          personalized insights tailored to your needs.
        </p>
        <div className="mt-5">
          <Link href={"/Chat-Section"}>
            <Button>Start Coding Now</Button>
          </Link>
        </div>
      </div>

      <div>
        <CodeBlockDemo />
      </div>
    </div>
  );
}
