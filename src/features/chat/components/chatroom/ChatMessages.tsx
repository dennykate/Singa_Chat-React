/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setMessages } from "@/lib/redux/services/chat-slice";
import getMessages from "../../services/message/get-messages";
import useProfile from "@/hooks/use-profile";
import MessageCard from "./MessageCard";
import { MessageType } from "@/types/type";
import MessageLoading from "./message/MessageLoading";
import InfiniteScrollContainer from "@/components/custom/container/InfiniteScrollContainer";

const ChatMessages = () => {
  const dispatch = useDispatch();
  const profile = useProfile();
  const { chatUser, messages } = useSelector((state: RootState) => state.chat);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

;

  const fetchMessages = async (page: number) => {
    setIsLoading(true);
    const res = await getMessages(
      profile?._id as string,
      chatUser?._id as string,
      page.toString()
    );

    if (res?.success) {
      setLastPage(res?.data?.lastPage);
      dispatch(setMessages([...messages, ...res?.data?.messages]));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMessages(page);
  }, [chatUser?._id, dispatch, profile?._id, page]);

  useEffect(() => {
    setPage(1);
  }, [chatUser]);

  return (
    <div className="w-full sm:h-[calc(100%-80px)] h-[calc(100%-70px)] overflow-hidden">
      <InfiniteScrollContainer
        isLoading={isLoading}
        page={page}
        lastPage={lastPage}
        setPage={setPage}
      >
        {({ lastMessageElementRef }) => (
          <>
            {messages?.map((message: MessageType, index: number) => {
              if (messages.length === index + 1) {
                return (
                  <div ref={lastMessageElementRef} key={message?._id}>
                    <MessageCard data={message} />
                  </div>
                );
              } else {
                return <MessageCard key={message?._id} data={message} />;
              }
            })}

            <MessageLoading isLoading={isLoading} page={page} />
          </>
        )}
      </InfiniteScrollContainer>
    </div>
  );
};

export default ChatMessages;
