
function ChatBubble({message, response}) {
    // const [response, setResponse] = useRecoilState(responseRecoil);

      return (
        <div>
            <div className="chat chat-start">
                <div className="chat-bubble">{message}</div>
            </div>
            {response.map((item) => {
                return (
                    <div key={item} className="chat chat-end">
             
                        <div className="chat-bubble">{item}</div>
                     </div>
                )
            })}
        </div>
      )
}

export default ChatBubble;