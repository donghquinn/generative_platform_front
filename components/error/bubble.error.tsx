// Error Bubble.
function ErrorBubble({message, errMsg}) {
    return (
      <div>
        <div className="user chatBubble">{message}</div>
          
          {errMsg.map((item) => {
              return (
                <div key={item} className="chat chat-end">
                    <div className="chat-bubble" style={{background: "red", color: "black"}}>{item}</div>
                </div>
              )
          })}
      </div>
    )
}

export default ErrorBubble;