import MarkdownRenderer from "@/components/custom/common/MarkdownRenderer";
import { twMerge } from "tailwind-merge";

const isSender = false;
const markdownText = `<div align="center">
  <h1>Hello 👋 , I'm Aung Myo Chit</h1>
</div>


`;

const Message = () => {
  return (
    <div
      className={twMerge(
        "w-full flex items-end gap-2",
        isSender ? "justify-end" : "justify-start"
      )}
    >
      {!isSender && (
        <div className="w-[30px] h-[30px] rounded-full object-cover overflow-hidden">
          <img
            src="/assets/images/logos/logo-square.webp"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div
        className={twMerge(
          "p-2 shadow-md rounded-md max-w-[500px] ",
          isSender ? "bg-white" : "bg-gray-100"
        )}
      >
        <MarkdownRenderer content={markdownText} />
        <div
          className={twMerge(
            "flex items-center gap-2",
            isSender ? "justify-end" : "justify-start"
          )}
        >
          <p className="text-xs text-gray-500">dennykate</p>
          <p className="text-xs text-gray-500">•</p>
          <p className="text-xs text-gray-500">10 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
