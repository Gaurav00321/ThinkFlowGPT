"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export function MovingTestimonies() {
  return (
    <div className="h-[40rem] rounded-3xl flex flex-col antialiased bg-gradient-to-b from-black via-gray-900 to-black  w-full items-center justify-center relative overflow-hidden">
        <h2 className="text-5xl mb-4 font-semibold text-teal-500 uppercase tracking-wide">What People Say About Us</h2>
        <p className="mt-2 mb-4 text-gray-400 text-center">Discover the voices of those who have experienced our work firsthand. <br /> Their words reflect the quality, dedication, and impact we strive to deliver every day.</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
