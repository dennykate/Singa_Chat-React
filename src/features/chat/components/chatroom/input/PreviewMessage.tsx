import MarkdownRenderer from "@/components/custom/common/MarkdownRenderer";

interface PropsType {
  content: string;
}

const PreviewMessage: React.FC<PropsType> = ({ content }) => {
  return (
    <div className="absolute sm:bottom-[80px] bottom-[65px] md:bottom-[90px] max-h-[50vh] overflow-y-auto left-0 min-w-[250px] xs:min-w-[300px] max-w-[400px] p-4 bg-white rounded-md shadow-md overflow-hidden">
      <p className="text-sm text-gray-500 mb-4">Preview Message</p>

      <MarkdownRenderer content={content} className="text-sm" />
    </div>
  );
};

export default PreviewMessage;
