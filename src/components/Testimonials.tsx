"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "ThinkFlowGPT transformed our workflow—its intuitive design and powerful features boosted our team's productivity by over 40%.",
    name: "Alex Johnson",
    title: "Product Manager at InnoTech",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "Using ThinkFlowGPT has been a game-changer. The interface is sleek and user-friendly, and the support team is outstanding.",
    name: "Maria Rodriguez",
    title: "CEO, Creative Solutions",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote:
      "The seamless integration and robust functionality of ThinkFlowGpt simplified our processes and helped us scale effortlessly.",
    name: "Samuel Lee",
    title: "CTO, NextGen Software",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    quote:
      "I appreciate the attention to detail in ThinkFlowGPT. It's reliable, efficient, and a true asset for any team looking to optimize their workflow.",
    name: "Emily Carter",
    title: "Marketing Director at GrowthHub",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    quote:
      "ThinkFlowGPT's innovative approach and performance optimizations set a new standard in our industry. It’s streamlined our processes and kept us ahead of the curve.",
    name: "Daniel Kim",
    title: "Founder, Visionary Ventures",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

export function MovingTestimonies() {
  return (
    <div className="h-[40rem] rounded-3xl flex flex-col antialiased bg-gradient-to-b from-black via-gray-900 to-black  w-full items-center justify-center relative overflow-hidden">
      <h2 className="text-5xl mb-4 font-semibold text-teal-500 uppercase tracking-wide">
        What People Say About Us
      </h2>
      <p className="mt-2 mb-4 text-gray-400 text-center">
        Discover the voices of those who have experienced our work firsthand.{" "}
        <br /> Their words reflect the quality, dedication, and impact we strive
        to deliver every day.
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
