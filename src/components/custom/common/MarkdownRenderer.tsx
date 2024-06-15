// MarkdownRenderer.js
import React, { HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { twMerge } from "tailwind-merge";

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  content: string;
}

const MarkdownRenderer: React.FC<PropsType> = ({
  content,
  className,
  ...props
}) => {
  return (
    <div className={twMerge("markdown-body", className)} {...props}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
