import React, { useRef, useCallback, ReactNode } from "react";

interface PropsType {
  children: ({
    lastMessageElementRef,
  }: {
    lastMessageElementRef: (node: HTMLDivElement | null) => void;
  }) => ReactNode;
  isLoading: boolean;
  page: number;
  lastPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const InfiniteScrollContainer: React.FC<PropsType> = ({
  children,
  isLoading,
  page,
  lastPage,
  setPage,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const lastMessageElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < lastPage) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, page, lastPage, setPage]
  );

  return (
    <div
      className="w-full h-full overflow-y-auto flex flex-col-reverse justify-start gap-4 sm:px-2 
      scrollbar-thin scrollbar-thumb-primary relative scrollbar-track-transparent pt-4"
    >
      {children({ lastMessageElementRef })}
      <div ref={loadMoreRef}></div>
    </div>
  );
};

export default InfiniteScrollContainer;
