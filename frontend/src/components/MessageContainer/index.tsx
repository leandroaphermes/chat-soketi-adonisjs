import DateString from "../DateString";

export type MessageContainerProps = {
  messageId: string;
  userId: string;
  userName: string;
  message: string;
  timestamp: string;
  ownerSend: boolean;
};

export default function MessageContainer({
  messageId,
  userId,
  userName,
  message,
  ownerSend,
  timestamp,
}: MessageContainerProps) {
  return (
    <div className="inline-flex flex-col p-1 bg-stone-800 rounded-lg">
      {!ownerSend && (
        <span className="text-white text-opacity-60">{userName}</span>
      )}
      <div className="flex gap-2 flex-wrap md:flex-nowrap">
        <p>{message}</p>
        <DateString date={timestamp} />
      </div>
    </div>
  );
}