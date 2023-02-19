import DateString from "components/DateString";

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
    <div className="inline-flex flex-col p-1 drop-shadow bg-stone-800 rounded-lg">
      {!ownerSend && <span className="text-slate-400">{userName}</span>}
      <div className="flex gap-2 flex-wrap md:flex-nowrap">
        <p>{message}</p>
        <DateString date={timestamp} />
      </div>
    </div>
  );
}
