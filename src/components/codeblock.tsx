"use client";
import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

type CodeBlockDemoProps = {
  language: string;
  filename: string;
  code: string;
  highlightLines?: number[];
};

export function CodeBlockDemo({
  language,
  filename,
  code,
  highlightLines = [],
}: CodeBlockDemoProps) {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language={language}
        filename={filename}
        highlightLines={highlightLines}
        code={code}
      />
    </div>
  );
}
