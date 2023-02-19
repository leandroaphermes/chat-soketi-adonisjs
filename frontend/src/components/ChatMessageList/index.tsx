import { DateTime } from "luxon";
import MessageContainer from "components/MessageContainer";

const date = DateTime.local()
  .minus({
    hours: 10,
    minutes: 10,
  })
  .toSQL();

export default function ChatMessageList() {
  return (
    <div className="flex-1 bg-transparent h-full overflow-x-auto pr-1 text-sm py-2">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row">
          <MessageContainer
            userId="2222"
            userName="Heizman"
            messageId="2222"
            message="Olá seu Hamaro"
            timestamp={`${date}`}
            ownerSend={false}
          />
        </div>
        <div className="flex flex-row-reverse">
          <MessageContainer
            userId="2222"
            userName="Hamaro"
            messageId="2222"
            message="Olá seu Heizman"
            timestamp={`${date}`}
            ownerSend={true}
          />
        </div>
        <div className="flex flex-row">
          <MessageContainer
            userId="2222"
            userName="Heizman"
            messageId="2222"
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur soluta earum ut at maiores quis veritatis deleniti. Similique alias esse cum vitae quo quae repudiandae nam dicta libero mollitia."
            timestamp={`${date}`}
            ownerSend={false}
          />
        </div>
      </div>
    </div>
  );
}
