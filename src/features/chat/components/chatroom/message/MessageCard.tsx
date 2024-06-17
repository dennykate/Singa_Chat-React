import { twMerge } from "tailwind-merge";
import MessageReactions from "../reactions/MessageReactions";

import React, { useEffect, useMemo, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MessageActions from "./MessageActions";
import Avatar from "@/components/custom/common/Avatar";
import MarkdownRenderer from "@/components/custom/common/MarkdownRenderer";
import { MessageType } from "@/types/type";
import formatDate from "@/utilities/format-date";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import EditMessage from "./EditMessage";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import useProfile from "@/hooks/use-profile";
import useReadAllMessages from "../../../services/message/use-read-all-messages";

interface PropsType {
  data: MessageType;
  isLastMessage?: boolean;
}

const MessageCard: React.FC<PropsType> = ({ data, isLastMessage }) => {
  const profile = useProfile();
  const { chatUser } = useSelector((state: RootState) => state.chat);
  const { onReadAllMessages } = useReadAllMessages();

  const [openActions, setOpenActions] = useState<boolean>(false);
  const [openEditMessage, setOpenEditMessage] = useState<boolean>(false);
  const [editMessage, setEditMessage] = useState<MessageType | undefined>(
    undefined
  );

  const isSender = useMemo(() => data?.isSender, [data]);

  useEffect(() => {
    if (isLastMessage && data.isSender === false) {
      onReadAllMessages({
        sender: profile?._id as string,
        recipient: chatUser?._id as string,
      });
    }
  }, [profile, chatUser, isLastMessage, data, onReadAllMessages]);

  return (
    <>
      <div className="w-full">
        <div
          className={twMerge(
            "w-full flex items-end gap-2 ",
            isSender ? "justify-end" : "justify-start",
            isLastMessage && !isSender && "mb-2"
          )}
        >
          {!isSender && (
            <Avatar src={data?.sender?.profile} alt={data?.sender?.username} />
          )}

          <Popover
            open={openActions}
            onOpenChange={() => setOpenActions(false)}
          >
            <PopoverTrigger asChild>
              <div
                onDoubleClick={() => setOpenActions(true)}
                className={twMerge(
                  "px-4 pt-4 pb-2 shadow-md rounded-md sm:max-w-[500px] sm:min-w-[350px] xs:min-w-[250px] min-w-[100px] xs:max-w-[300px] max-w-[270px] overflow-hidden ",
                  isSender ? "bg-white" : "bg-gray-100"
                )}
              >
                {/* Message Content  */}
                <MarkdownRenderer content={data?.content} />

                {/* Message Footer  */}
                <div
                  className={twMerge(
                    "flex items-center gap-4 justify-between w-full mt-2",
                    isSender ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {/* {!isSender && (
                      <>
                        <p className="text-xs text-gray-500 font-[300]">
                          {data?.sender?.username}
                        </p>

                        <p className="text-xs text-gray-500 font-[300]">•</p>
                      </>
                    )} */}

                    <p className="text-xs text-gray-500 font-[300]">
                      {formatDate(data?.createdAt as string)}
                    </p>

                    {data?.isEdited && (
                      <>
                        <p className="text-xs text-gray-500 font-[300]">•</p>
                        <p className="text-xs text-gray-500 font-[300]">
                          Edited
                        </p>
                      </>
                    )}
                  </div>

                  <MessageReactions isSender={isSender} data={data} />
                </div>
              </div>
            </PopoverTrigger>

            {/* Message Actions  */}
            <PopoverContent side="top" className="!w-auto !p-1">
              <MessageActions
                data={data}
                onEditPress={() => {
                  setOpenEditMessage(true);
                  setEditMessage(data);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/*  Seen or Sent  */}
        {data?.isSender && isLastMessage && (
          <div className="w-full flex justify-end mt-1 pr-1">
            <p className="text-xs font-[300]">
              {data?.isRead ? "seen" : "sent"}
            </p>
          </div>
        )}
      </div>

      {editMessage && (
        <Dialog
          open={openEditMessage}
          onOpenChange={() => {
            setOpenEditMessage(false);
            setEditMessage(undefined);
          }}
        >
          <DialogContent>
            <EditMessage
              editMessage={editMessage}
              onEditMessage={() => {
                setOpenEditMessage(false);
                setEditMessage(undefined);
              }}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default MessageCard;
