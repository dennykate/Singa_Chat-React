export type ReactionType = "like" | "wow" | "sad" | "haha" | "love" | "angry";

export type UserType = {
  username: string;
  email: string;
  profile: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  lastMessage?: string;
};

interface IReaction {
  user: string;
  type: ReactionType;
}

// Define the Message interface
export type MessageType = {
  _id: string;
  sender: UserType;
  recipient: UserType;
  content: string;
  reactions: IReaction[];
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  isSender: boolean;
  isEdited: boolean;
};
