import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  isSender?: boolean;
}

const SkeletonMessageCard: React.FC<PropsType> = ({ isSender }) => {
  return (
    <div
      className={twMerge(
        "w-full flex items-end gap-2",
        isSender ? "justify-end" : "justify-start"
      )}
    >
      {!isSender && <Skeleton className="w-[30px] h-[30px] rounded-full" />}

      <Skeleton className="rounded-md max-w-[500px] sm:min-w-[350px] xs:min-w-[250px] h-[100px] min-w-[100px]" />
    </div>
  );
};

export default SkeletonMessageCard;
