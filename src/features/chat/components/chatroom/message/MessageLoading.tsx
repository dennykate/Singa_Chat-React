import SkeletonMessageCard from "./SkeletonMessageCard";

interface PropsType {
  isLoading: boolean;
  page: number;
}

const MessageLoading: React.FC<PropsType> = ({ isLoading, page }) => {
  return (
    <>
      {isLoading && (
        <>
          <SkeletonMessageCard isSender />
          <SkeletonMessageCard />
          {page === 1 && (
            <>
              <SkeletonMessageCard />
              <SkeletonMessageCard isSender />
            </>
          )}
        </>
      )}
    </>
  );
};

export default MessageLoading;
