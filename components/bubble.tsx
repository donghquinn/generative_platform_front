import { useRecoilState } from "recoil";
import { requestSuccess, responseRecoil } from "../src/chat.recoil";

function ChatBubble({message}) {
    const [success, setSuccess] = useRecoilState(requestSuccess);
    const [response, setResponse] = useRecoilState(responseRecoil);

    if (success) {
      return (
        <div>
            <div className="chat chat-start">
                <div className="chat-bubble">{message}</div>
            </div>
                    <div className="chat chat-end">
                <div className="chat-bubble">{response}</div>
            </div>
        </div>
      )
    }
    return (
        <div></div>
    )
}

export default ChatBubble;