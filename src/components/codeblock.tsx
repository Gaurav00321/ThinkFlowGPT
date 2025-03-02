"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`;

  return (
    <div className="max-w-2xl w-full">
      <CodeBlock
        language="jsx"
        filename="DummyComponent.jsx"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
