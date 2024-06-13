// MarkdownRenderer.js
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface PropsType {
  content: string;
}

const MarkdownRenderer: React.FC<PropsType> = ({ content }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
