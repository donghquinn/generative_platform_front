function ChatBubble({message}) {
    return (
        <div>
            <div className="chat chat-start">
            <div className="chat-bubble">{message}</div>
            </div>
        </div>
    )
}

export default ChatBubble;