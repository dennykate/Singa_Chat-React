import { twMerge } from "tailwind-merge";
import MessageReactions from "./reactions/MessageReactions";

import React, { useMemo, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MessageActions from "./message/MessageActions";
import Avatar from "@/components/custom/common/Avatar";
import MarkdownRenderer from "@/components/custom/common/MarkdownRenderer";
import { MessageType } from "@/types/type";
import formatDate from "@/utilities/format-date";

interface PropsType {
  data: MessageType;
}

const MessageCard: React.FC<PropsType> = ({ data }) => {
  const [openActions, setOpenActions] = useState<boolean>(false);

  const isSender = useMemo(() => data?.isSender, [data]);

  return (
    <div
      className={twMerge(
        "w-full flex items-end gap-2",
        isSender ? "justify-end" : "justify-start"
      )}
    >
      {!isSender && (
        <Avatar src={data?.sender?.profile} alt={data?.sender?.username} />
      )}

      <Popover open={openActions} onOpenChange={() => setOpenActions(false)}>
        <PopoverTrigger asChild>
          <div
            onDoubleClick={() => setOpenActions(true)}
            className={twMerge(
              "px-4 pt-4 pb-2 shadow-md rounded-md max-w-[500px] sm:min-w-[350px] xs:min-w-[250px] min-w-[100px]",
              isSender ? "bg-white" : "bg-gray-100"
            )}
          >
            {/* Message Content  */}
            <MarkdownRenderer content={data?.content} />

            {/* Message Footer  */}
            <div
              className={twMerge(
                "flex items-center gap-2 justify-between w-full mt-2",
                isSender ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-500 font-[300]">
                  {data?.sender?.username}
                </p>
                <p className="text-xs text-gray-500 font-[300]">•</p>
                <p className="text-xs text-gray-500 font-[300]">
                  {formatDate(data?.createdAt as string)}
                </p>
              </div>

              <MessageReactions isSender={isSender} />
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent side="top" className="!w-auto !p-1">
          <MessageActions />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MessageCard;
