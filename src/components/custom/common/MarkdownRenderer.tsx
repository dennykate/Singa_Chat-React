import React, { HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { twMerge } from "tailwind-merge";
import "highlight.js/styles/github.css"; // You can choose a different theme

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
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
