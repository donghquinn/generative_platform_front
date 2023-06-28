
function ErrorBubble({message, errMsg}) {
    return (
      <div>
          <div className="chat chat-start">
              <div className="chat-bubble">{message}</div>
          </div>
          
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