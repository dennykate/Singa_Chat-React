import React from "react";
import FriendCard from "./FriendCard";

const Friends = () => {
  return (
    <div className="w-full h-[calc(100%-160px)] flex flex-col">
      <FriendCard />
    </div>
  );
};

export default Friends;
