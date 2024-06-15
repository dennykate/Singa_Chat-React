import MarkdownRenderer from "@/components/custom/common/MarkdownRenderer";

interface PropsType {
  content: string;
}

const PreviewMessage: React.FC<PropsType> = ({ content }) => {
  return (
    <div className="absolute bottom-[90px] max-h-[50vh] overflow-y-auto left-0 min-w-[300px] max-w-[400px] p-4 bg-white rounded-md shadow-md overflow-hidden">
      <p className="text-sm text-gray-500 mb-4">Your Preview Message</p>
      
      <MarkdownRenderer content={content} className="text-sm" />
    </div>
  );
};

export default PreviewMessage;
