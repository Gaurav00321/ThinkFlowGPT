"use client";
import Link from "next/link";
import featureData from "../data/features.json";
import { Button } from "./ui/moving-border";

function FeaturedFeatures() {
  const featuredFeatures = featureData.features;

  return (
    <div className="py-16 px-8 bg-gradient-to-b from-black via-gray-900 to-black rounded-3xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Heading & CTA */}
        <div className="text-white">
          <h2 className="text-5xl mb-4 font-semibold text-teal-500 antialiased uppercase tracking-wide">
            Features
          </h2>
          <h3 className="mt-2 text-4xl font-bold">
            The power of ThinkFlowGpt at your fingertips
          </h3>
          <p className="mt-4 text-gray-400">
            Discover how ThinkFlowGpt helps you automate tasks and enhance efficiency.
          </p>
          <div className="mt-5">
            <Link href={"/Features"}>
              <Button>Start for free</Button>
            </Link>
          </div>
        </div>

        {/* Right Section: 4-Card Grid Layout with Smooth Hover Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredFeatures.slice(0, 4).map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-xl bg-gray-800 text-white shadow-lg transition-all duration-300 ease-in-out 
                         transform hover:scale-105 hover:shadow-2xl"
            >
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-gray-400 mt-2 text-sm">{feature.description}</p>
              <Link
                href={`/features/${feature.slug}`}
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedFeatures;
